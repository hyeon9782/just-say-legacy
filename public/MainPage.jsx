import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Container from "../src/components/common/Container";
const MainPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MainBlock>
                <TextBlock>
                    <div className="en">
                        Your <br /> 
                        Ultimate <br />
                        SpeakMate
                    </div>
                    <div className="ko">
                        모두가 두려움없이 외국어를 말할 수 있도록. <br />
                        될 때까지 말해보세요!
                    </div>
                    <div>
                        <StartButton onClick={() => navigate('/language')}>
                            시작하기
                        </StartButton>
                    </div>
                </TextBlock>
                <div className="image-box">
                    <ImageBlock></ImageBlock>
                </div>
            </MainBlock>
        </Container>
    )
}

const MainBlock = styled.div`
    display: flex;
    justify-content: space-between;
   
    .image-box{
        display: flex;
        align-items: center;
    }
`

const TextBlock = styled.div`
    
    .en{
        font-weight: 700;
        font-size: 96px;
        line-height: 115px;
        padding-bottom: 50px;
    }

    .ko{
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
        padding-bottom: 40px;
    }
    
   
`

const ImageBlock = styled.div`
    height: 366.943359375px;
    width: 552px;
    border-radius: 0px;
    background: url("./BG_IMG 1.png");
`

const StartButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 28px 200px;
    gap: 10px;

    background: #4B8BF6;
    border-radius: 50px;
    border: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
`

export default MainPage;