import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Container from "../components/common/Container";
const MainPage = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MainBlock>
                <TextBlock>
                    <div className="en">
                        Your 
                        Ultimate <br />
                        SpeakMate
                    </div>
                    <div className="ko">
                        모두가 두려움없이 외국어를 말할 수 있도록. <br />
                        될 때까지 말해보세요!
                    </div>
                    <div className="btn-box">
                        <StartButton onClick={() => navigate('/language')}>
                            시작하기
                        </StartButton>
                    </div>
                </TextBlock>
                <div className="image-box">
                    <ImageBlock>
                        <img src="img/BG_IMG 1.png" alt="dd" width="100%" height="100%" />
                    </ImageBlock>
                </div>
            </MainBlock>
        </Container>
    )
}

const MainBlock = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    justify-content: space-between;
   
    .image-box{
        display: flex;
        align-items: center;
        /* order: 2; */
    }

    

    @media screen and (max-width: 575px){
        width: 100%;
        padding: 10px 30px;
        flex-direction: column;
        align-items: center;

        .btn-box{
            display: flex;
            justify-content: center;
            padding-bottom: 50px;
        }
    }
`

const TextBlock = styled.div`
    /* order: 1; */
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

    @media screen and (max-width: 575px){
        .en{
            font-size: 40px;
            line-height: 48px;
            text-align: center;
        }
        .ko{
            font-size: 18px;
            line-height: 24px;
            text-align: center;
        }
    }
    
   
`

const ImageBlock = styled.div`
    height: 366.943359375px;
    width: 552px;
    border-radius: 0px;

    @media screen and (max-width: 575px){
        width: 281px;
        height: 183.47px;
    }
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

    @media screen and (max-width: 575px){
        font-size: 20px;
        line-height: 24px;
        padding: 15px 119px;
    }
`

export default MainPage;