import styled from "styled-components";
import axios from 'axios';
import { useEffect, useRef, useState } from "react";
import useTextToSpeech from "../hooks/useTextToSpeech";
import { useAtom } from "jotai";
import { infoAtom, talkAtom } from "../atom/atom";
import lang_data from "../assets/language.json";
import cafe_info from "../assets/cafe.json";

const TalkButton = () => {
    const audioRef = useRef(null);
    const [info, setInfo] = useAtom(infoAtom);
    // const [talk, setTalk] = useAtom(talkAtom);
    const [messages, setMessages] = useState([]);
    const [isRecording, setIsRecording] = useState(false);

    useEffect(() => {
        //  기본 역할 정의
        let define_bot_role = "you are a cafe manager."
        //  카페 메뉴 설정. 이미지에 있는 메뉴 모두 추가
        let menu_num = cafe_info.menu_list.length;
        define_bot_role += `you have ${menu_num} menus. The menus and price are `;
        const menus = cafe_info.menu_list.map(item => item.menu);
        const prices = cafe_info.menu_list.map(item => item.price);
        for (let idx = 0; idx < menu_num; idx++) {
          define_bot_role += `${menus[idx]} and price is ${prices[idx]}`;
          if (idx === menu_num - 1) {
            define_bot_role += ".";
          } else {
            define_bot_role += ",";
          }
        }
        //  매니저 성격 설정. prompt에 영향을 미친다.
        define_bot_role += "your personality is " + cafe_info.manager_character[Math.floor(Math.random() * cafe_info.manager_character.length)] + ".";
        //  그 외 기본 세팅
        define_bot_role += "always say in " + info.city.value +"."
        // 시작할 때 유저가 먼저 말하는게 아니고 chatGPT가 먼저 인사하게 만듭니다.
        define_bot_role += "Let's start now. You say 'Can I take your order?' in "+ info.city.value + " first."
        // 고객이 이미 카페 안에 있다고 가정합니다 (방문해서 알아보세요라는 대답 방지 )
        define_bot_role += "The customer is currently in the cafe."
        // 외국어로 말하면 잘 모르겠다고(이해를 못하겠다고) 답변
        define_bot_role += "you do not understand if the customer does not speak in " + info.city.value + "."
        // 포장 여부 혹은 결제 방법 꼭 물어보기 
        define_bot_role += "during the conversation, payment method and for here or to go is important."
        define_bot_role += "do not include 'swipe machine provided' in the conversation."

        //  초기 프롬프트 설정
        let msgList = []
        msgList.push({"role":"system", "content": define_bot_role})
        // 항상 상기시켜야 하는 내용들?
        // 이후 4096을 넘어갔을 때 다시 한번 상기시켜야 함.
        let notice_msg = "you never say you are a bot but pretend you are a cafe manager."
        notice_msg += "if order was made or payment method was set or for take-out was decided, include '@' at the end of your reply for once."
        notice_msg += "Use "+info.language+" only."
        notice_msg += "The following is the start of conversation with customer and start with 2 sentences."
        msgList.push({"role":"user", "content": notice_msg})     

        //  자동 실행 시 에러 발생. 자동 시작 컨텐츠에서 발현됨.
        //  메뉴 닫으면 처음 messages의 내용을 먼저 대화 요청.
        //  "TalkButton.jsx:96 Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first."
        // const timer = setTimeout(() => {
        //     console.log("timer => ",msgList)
        //     callGPT(msgList)
        // }, 5000);
        // // cleanup 함수
        // return () => clearTimeout(timer);        
        setMessages(msgList);
    }, [])

    const callGPT = async (msgs) => {
        // 입력 값이 없을 경우 GPT 호출 방지
        if (msgs[msgs.length - 1].content === '') return;
        const res = await axios.post('https://api.just-say.net/api/v1/gpt', msgs, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
        // setTalk({
        //     role: "gpt",
        //     content: res.data.answer
        // })
        msgs.push({"role":"assistant", "content": res.data.answer})  
        console.log( "SET Message List =", msgs)
        setMessages(msgs);  

        let answer = `${res.data.answer}`
        if(answer === undefined || answer.length < 1){
            //  예외 발생 
            console.log("ERROR ", answer);
        }else{
            callTTS(answer)
        }
    }

    const callTTS = async (answer) => {
        var bEnd = false;
        if(answer.includes("@") === true){
            bEnd = true;
            answer = answer.replace("@", "");
        }
        console.log(" TTS 요청 : " + answer)
        const res = await useTextToSpeech({ ssml: answer });
        const audioBlob = new Blob([res.data], { type: "audio/mpeg" });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioRef.current.src = audioUrl;
        await audioRef.current.play();
        // return bEnd;
    }

    useEffect(() => {
        let recognition = null;
        let content = "";
        if (isRecording) {
            recognition = new window.webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.lang = "en-US";
            // recognition.lang = info.city.value;
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
                setMessages(prev => {
                    if(content === undefined || content.length < 1){
                        console.log("nothing!!")
                    }else{
                        const newMessages = [...prev]
                        newMessages.push({
                            role: "user",
                            content,
                        })
                        callGPT(newMessages)
                        setMessages(newMessages);
                        // setTalk({
                        //     role: "user",
                        //     content
                        // })
                        console.log(newMessages);
                        return newMessages;
                    }
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
                {isRecording ? '듣는 중이에요' : '클릭하여 대화를 시작하세요'}
            </Help>
            <TalkButtonBlock onClick={handleRecognition} >
                <img src={isRecording ? "img/mice2.png" : "img/mice.png"} alt="mice" />    
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

    @media screen and (max-width: 575px){
        padding: 10px 0;
    }
`

export default TalkButton;