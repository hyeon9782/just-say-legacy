import { useNavigate } from "react-router-dom"
import styled from "styled-components"
const MainPage = () => {
    const navigate = useNavigate();
    return (
        <MainPageBlock>
            <MainBlock>
                <TextBlock>
                    Your Ultimate SpeakMate
                </TextBlock>
                <StartButton onClick={() => navigate('/language')}>
                    시작하기
                </StartButton>
                <ImageBlock>
                    <img src="src/assets/BG_IMG 1.png" alt="bg" width="100%" height="100%" />
                </ImageBlock>
            </MainBlock>
        </MainPageBlock>
    )
}

const MainPageBlock = styled.div`
    position: relative;
    width: 1440px;
    height: 900px;
`

const MainBlock = styled.div`
    position: absolute;
    width: 1440px;
    height: 900px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
`

const TextBlock = styled.div`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 96px;
    line-height: 115px;

    color: #000000;
`

const ImageBlock = styled.div`
    height: 366.943359375px;
    width: 600px;
    left: 712px;
    top: 257px;
    border-radius: 0px;
`

const StartButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 28px 200px;
    gap: 10px;

    position: absolute;
    width: 511px;
    height: 94px;
    left: 111px;
    top: 664px;

    background: #4B8BF6;
    border-radius: 50px;
`

export default MainPage;