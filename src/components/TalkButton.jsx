import styled from "styled-components";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useAtom } from "jotai";
import { progressAtom } from "../atom/atom";

const TalkButton = () => {

    const audioRef = useRef(null);

    const [progress, setProgress] = useAtom(progressAtom);


    const [messages, setMessages] = useState([
        {"role":"system", "content": "you're a cafe manager Please answer in English"},
        {"role":"user", "content": "Hello!"},
        {"role":"assistant", "content": "how are you? Can I take your order?"},
        // {"role":"user", "content": "I'll have a latte"}
    ]);

    const callGPT = async (messages) => {
        const res = await axios.post('http://52.79.149.130:8000/api/v1/gpt', messages, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
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
        const res = await useTextToSpeech({ ssml: answer });
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
            recognition.lang = "en-US";
            // recognition.lang = progress;
            recognition.onresult = (event) => {
                const results = event.results;
                const contents = []
                Object.keys(results).forEach(key => contents.push(results[key][0].transcript))
                content = contents.join(' ,')
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
            <Help>
                {isRecording ? '듣는 중이에요' : '탭하여 대화를 시작하세요'}
            </Help>
            <TalkButtonBlock onMouseDown={handleRecognition} onMouseUp={handleRecognition} >
                <img src={isRecording ? "./mice2.png" : "./mice.png"} alt="mice" />    
            </TalkButtonBlock>
            
            <audio controls ref={audioRef} style={{"display": "none"}}></audio>
        </>
    )
}

const TalkButtonBlock = styled.div`
    cursor: pointer;
`

const Help = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding: 30px 0;
`

export default TalkButton;