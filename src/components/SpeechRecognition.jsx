import React, { useState, useEffect } from 'react';

const SpeechRecognition = () => {
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let recognition = null;
    if (isRecording) {
      recognition = new window.webkitSpeechRecognition();
      recognition.onresult = (event) => {
        const resultIndex = event.resultIndex;
        const transcript = event.results[resultIndex][0].transcript;
        console.log(transcript);
      }
      recognition.onerror = (event) => {
        console.error(event.error);
      }
      recognition.start();
    }
    return () => {
      if (recognition) {
        recognition.stop();
      }
    }
  }, [isRecording]);

  const handleButtonClick = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{isRecording ? '음성 인식 중지' : '음성 인식 시작'}</button>
    </div>
  );
};

export default SpeechRecognition;
