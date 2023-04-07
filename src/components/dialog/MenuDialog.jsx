import { useAtom } from "jotai";
import { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { isCloseAtom } from "../../atom/atom";
import Menu from '/img/new-menu.png';
import X from '/img/x.png';
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
                <div className="img-box">
                    <img src={Menu} alt="menu" width="100%" height="100%"/>
                </div>
            </MenuContent>
            <audio controls ref={audioRef} style={{"display": "none"}}></audio>
        </MenuBlock>
    )
})

const MenuBlock = styled.dialog`
    border: 0;
    width: 500px;
    height: 674.53px;
    max-width: 100vw;
    max-height: 100vh;
    overflow: auto;
    padding: 0;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.25);
    &.backdrop {
        max-width: 100%;
        max-height: 100%;
    }
    
    @media screen and (max-width: 575px){
        width: 80vw;
        height: 70vh;
    }
    
`

const MenuContent = styled.div`
    height: 90%;
    position: relative;
    .img-box{
        width: 100%;
        height: calc(90%);
    }
`

const MenuHead = styled.div`
    height: 10%;
    display: flex;
    justify-content: flex-end;
    .close {
        width: 22px;
        height: 22px;
        background: url(${X});
        margin: 10px;
    }

    @media screen and (max-width: 575px){
        
    }
`

export default MenuDialog;