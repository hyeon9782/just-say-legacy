import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { infoAtom } from "../atom/atom";

const ReadyPage = () => {
    const navigate = useNavigate();
    const info = useAtomValue(infoAtom);
    return (
        <BackgroundBlock>
            <ReadyBlock>
                <TextBlock>
                    {info.city.name} 34st 카페에 도착했어요. <br />
                    <div className="sub">
                        메뉴를 보고, 내가 먹고 싶은 것을 주문해 볼까요??
                    </div>
                </TextBlock>
                <Help>내 스피커와 마이크가 잘 동작하는지 확인해 주세요.</Help>
                <StartButton onClick={() => navigate('/talk')}>대화 시작</StartButton>
            </ReadyBlock>
        </BackgroundBlock>
    )
}

const BackgroundBlock = styled.div`
    height: 100vh;
    width: 100vw;
    background:url("img/준비_카페.png");
    z-index: 0;

    @media screen and (max-width: 575px){
        width: 100%;
        height: 100vh;
        padding: 0;
    }
`

const ReadyBlock = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 64px;
    line-height: 100px;
    text-align: center;
    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
        /* .sub{
            width: 180px;
        } */
    }
`

const Help = styled.div`
    font-weight: 400;
    font-size: 28px;
    line-height: 33px;
    padding: 50px 0;

    @media screen and (max-width: 575px){
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;

        padding: 20px 0;
    }
`

const StartButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 518px;
    height: 94px;
    background: #4B8BF6;
    border-radius: 50px;

    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;

    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        width: 312px;
        height: 54px;
    }
`

export default ReadyPage;