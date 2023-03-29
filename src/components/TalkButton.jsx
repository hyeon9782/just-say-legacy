import styled from "styled-components";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import useTextToSpeech from "../hooks/useTextToSpeech";

const TalkButton = () => {

    const audioRef = useRef(null);

    const [messages, setMessages] = useState([
        {"role":"system", "content": "you're a cafe manager Please answer in English"},
        {"role":"user", "content": "Hello!"},
        {"role":"assistant", "content": "how are you? Can I take your order?"},
        // {"role":"user", "content": "I'll have a latte"}
    ]);

    const callGPT = async (messages) => {
        const res = await axios.post('http://localhost:8000/api/v1/chatgpt', messages);
        console.log(res);
        console.log(res.data.answer);
        let answer = `<speak>${res.data.answer}</speak>`
        callTTS(answer)
        messages.map((item) => {
            if (item["role"] === "assistant" && res.data.answer !== undefined) {
                item["content"] = item["content"] + ' ' + res.data.answer
                console.log(item['content']);
            }
        })
        console.log(messages);
    }

    const callTTS = async (answer) => {
        const res = await useTextToSpeech({ ssml: answer});
        const audioBlob = new Blob([res.data], { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioRef.current.src = audioUrl;
        await audioRef.current.play();
    }

    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        let recognition = null;
        let content = "";
        if (isRecording) {
            recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true;
            // recognition.lang = "en-US";
            recognition.lang = "ko-KR";
            recognition.onresult = (event) => {
                const results = event.results;
                const contents = []
                Object.keys(results).forEach(key => contents.push(results[key][0].transcript))
                content = contents.join(' ')
                console.log(content);

            }
            recognition.onerror = (event) => {
                console.error(event.error);
            }
            recognition.start();
        }
        return () => {
            if (recognition) {
                recognition.stop();
                console.log(content);
                setMessages(prev => {
                    const newMessages = [...prev]
                    newMessages.push({
                        role: "user",
                        content,
                    })
                    callGPT(newMessages)
                    console.log(newMessages);
                    return newMessages;
                })
            }
        }
    }, [isRecording]);

    const handleRecognition = () => {
        setIsRecording(!isRecording);
    };

    return (
        <>
            <TalkButtonBlock onMouseDown={handleRecognition} onMouseUp={handleRecognition}>
                {isRecording ? '음성 인식 중지' : '음성 인식 시작'}
            </TalkButtonBlock>
            <audio controls ref={audioRef} style={{"display": "none"}}></audio>
            {/* <button onClick={callTTS}>callTTS</button> */}
        </>
    )
}

const TalkButtonBlock = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid wheat;
    margin: 20px 0px;
    cursor: pointer;

    // 이미지 들어오면 삭제
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.2rem;
`

export default TalkButton;