import { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useTextToSpeech from "../../hooks/useTextToSpeech";
const MenuDialog = forwardRef((props, ref) => {

    let first = useRef(true);

    const audioRef = useRef(null);

    useEffect(() => {
        callTTS("When you close the menu, the conversation begins")
    },[])

    const callTTS = async (message) => {
       const res = await useTextToSpeech({ ssml: message });
       const audioBlob = new Blob([res.data], { type: "audio/mpeg" });
       const audioUrl = URL.createObjectURL(audioBlob);
       audioRef.current.src = audioUrl;
       await audioRef.current.play();
    }

    const handleClick = (e) => {
        if (e.target === ref.current) ref.current?.close()
        if (first) {
            alert("안녕");
            console.log(e.target === ref.current)
            
        }
        // first = false
        // if (e.target === ref.current) ref.current?.close()
    }

    return (
        <MenuBlock ref={ref}
            >
            {/* <img src="img/menu.png" alt="menu" width="100%" height="100%" /> */}
            <Head>
                <div className="close" onClick={handleClick}></div>
            </Head>
            <audio controls ref={audioRef} style={{"display": "none"}}></audio>
        </MenuBlock>
    )
})

const MenuBlock = styled.dialog`
    
    width: 500px;
    height: 677.88px;
    /* position: relative; */
    border: 0;
    padding: 0;
    background: url("img/menu.png");
    @media screen and (max-width: 575px){
        width: 90%;
        height: auto;

    }

`

const Head = styled.div`
    /* position: absolute;
    top: 0;
    left: 0; */
    display: flex;
    justify-content: flex-end;
    .close {
        width: 22px;
        height: 22px;
        background: url("img/x.png");
        margin: 10px;
    }
`

export default MenuDialog;