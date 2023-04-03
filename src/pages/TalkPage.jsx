import { useRef } from "react";
import styled from "styled-components"
import EndDialog from "../components/dialog/EndDialog";
import MenuDialog from "../components/dialog/MenuDialog";
import TalkButton from "../components/TalkButton"
const TalkPage = () => {
    const end = useRef(null);
    const menu = useRef(null);
    return (
        <TalkBlock>
            <CloseBlock onClick={() => end.current?.showModal()}>
                <img src="img/x-1.png" alt="x" width="100%" height="100%"/>
            </CloseBlock>
            <ImageBlock>
                <div className="gradient">
                    <TextBlock>메뉴를 보고, 카페에서 내가 먹고 싶은 것을 주문해 보세요</TextBlock>
                    <MenuBlock onClick={() => menu.current?.showModal()}>
                        <div className="document"></div>
                        <div className="text">메뉴판</div>
                    </MenuBlock>
                </div>
            </ImageBlock>
            <MiceBlock>
                <TalkButton>
                    
                </TalkButton>
            </MiceBlock>
            <EndDialog ref={end}/>
            <MenuDialog ref={menu} />
        </TalkBlock>
    )
}

const TalkBlock = styled.div`
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
    background: url("img/cafe.png");
    width: 100%;
    height: 730px;
    display: flex;
    align-items: flex-end;
    
    .gradient{
        display: flex;
        align-items: flex-end;
        width: 100%;
        height: 198px;
        background: linear-gradient(357.27deg, #000000 33.63%, rgba(217, 217, 217, 0) 98.09%);
    }

    @media screen and (max-width: 575px){
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
        background: url("img/document 1.png");
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
   
`

export default TalkPage;