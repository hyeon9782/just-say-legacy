import { useEffect, useRef } from "react";
import styled from "styled-components"
import EndDialog from "../components/dialog/EndDialog";
import MenuDialog from "../components/dialog/MenuDialog";
import TalkButton from "../components/TalkButton";
import CafeBGM from '/mp3/카페.mp3';
import CafeBG from '/img/대화_카페.png';
import Document from '/img/document 1.png';
import X from '/img/x-1.png';
const TalkPage = () => {
    const modal = useRef(null);
    const menu = useRef(null);
    const bgmRef = useRef(null);
    useEffect(() => {
        menu.current?.showModal()
    },[])
    return (
        <>
            <TalkBlock>
                <ImageBlock>
                    <CloseBlock onClick={() => modal.current?.showModal()}>
                        <img src={X} alt="x" width="100%" height="100%"/>
                    </CloseBlock>
                    <div className="gradient">
                        <TextBlock>메뉴를 보고, 카페에서 내가 먹고 싶은 것을 주문해 보세요</TextBlock>
                        <MenuBlock onClick={() => menu.current?.showModal()}>
                            <div className="document">
                                <img src={Document} alt="document" width="100%" height="100%" />
                            </div>
                            <div className="text">메뉴판</div>
                        </MenuBlock>
                    </div>
                </ImageBlock>
                <audio controls src={CafeBGM} style={{ "display" : "none" }} ref={bgmRef}></audio>
                <MiceBlock>
                    <TalkButton></TalkButton>
                </MiceBlock>
            </TalkBlock>
            <EndDialog ref={modal}/>
            <MenuDialog ref={menu} />
        </>
    )
}

const TalkBlock = styled.div`
    overflow: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CloseBlock = styled.div`
    position: absolute;
    top: 30px;
    right: 100px;
    width: 32px;
    height: 32px;
    

    @media screen and (max-width: 575px){
        position: absolute;
        top: 30px;
        left: 450px;
        width: 22px;
        height: 22px;
        
    }
`

const ImageBlock = styled.div`
    background: url(${CafeBG});
    width: 100%;
    height: 730px;
    display: flex;
    align-items: flex-end;
    
    .gradient{
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 198px;
       
    }

    @media screen and (max-width: 575px){
        height: 80%;
        background-repeat : no-repeat;
        background-size : cover;
        .gradient{
            display: flex;
            justify-content: space-around;
        }
    }
`

const MenuBlock = styled.div`
    width: 60px;
    padding: 0px 30px 30px 0px;
    .document{
        width: 44px;
        height: 44px;
    }

    .text{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: white;
    }

    @media screen and (max-width: 575px){
        
    }
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;
    width: 100%;
    padding-bottom: 30px;
    display: flex;
    justify-content: center;
    color: #FFFFFF;

    
    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 22px;
        line-height: 30px;
        width: 62%;
    }
`



const MiceBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 730px);
   
   @media screen and (max-width: 575px){
        height: 20%;
    }
`

export default TalkPage;