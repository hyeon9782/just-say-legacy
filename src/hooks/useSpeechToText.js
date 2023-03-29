const SpeechToText = async ({

}) => {
    let recognition = null;
    let content = "";
    if (isRecording) {
      recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        const results = event.results;
        const contents = [];
        Object.keys(results).forEach((key) =>
          contents.push(results[key][0].transcript)
        );
        content = contents.join(" ");
        console.log(content);
      };
      recognition.onerror = (event) => {
        console.error(event.error);
      };
      recognition.start();
    }
    return () => {
      if (recognition) {
        recognition.stop();
        console.log(content);
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages.push({
            role: "user",
            content,
          });
          callGPT(newMessages);
          console.log(newMessages);
          return newMessages;
        });
      }
    };
}

export default SpeechToText;