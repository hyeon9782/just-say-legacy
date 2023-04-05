import { useAtom } from "jotai";
import { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { isCloseAtom } from "../../atom/atom";
const MenuDialog = forwardRef((props, ref) => {

    let first = useRef(true);

    const audioRef = useRef(null);

    const [isClose, setIsClose] = useAtom(isCloseAtom)

    const handleClick = (e) => {
        if (first) {
            setIsClose(true)
            first = false
        }
        ref.current?.close()
    }

    return (
        <MenuBlock ref={ref}
            >
            <MenuHead>
                <div className="close" onClick={handleClick}></div>
            </MenuHead>
            <MenuContent>
                <div className="text-box">
                    메뉴판을 닫으면 대화가 시작됩니다.
                </div>
                <div className="img-box">
                    <img src="img/menu.png" alt="menu" width="100%" height="100%"/>
                </div>
            </MenuContent>
            <audio controls ref={audioRef} style={{"display": "none"}}></audio>
        </MenuBlock>
    )
})

const MenuBlock = styled.dialog`
    
    width: 500px;
    height: 677.88px;
    border: 0;
    padding: 0;
    
    @media screen and (max-width: 575px){
        width: 90%;
        height: 500px
    }

`

const MenuContent = styled.div`
    height: 80%;

    .text-box{
        text-align: center;
        padding: 10px;
    }

    .img-box{
        width: 100%;
        height: calc(90%);
    }
`

const MenuHead = styled.div`
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