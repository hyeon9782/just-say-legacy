import styled from "styled-components"
import Container from '../components/common/Container'
import TalkButton from "../components/TalkButton"
const TalkPage = () => {
    return (
        <TalkBlock>
            <ImageBlock>
                <div className="gradient">
                    <TextBlock>메뉴를 보고, 카페에서 내가 먹고 싶은 것을 주문해 보세요</TextBlock>
                </div>
            </ImageBlock>
            <MiceBlock>
                <Help>탭하여 대화를 시작하세요</Help>
                <div className="mice"></div>
            </MiceBlock>
        </TalkBlock>
    )
}

const TalkBlock = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ImageBlock = styled.div`
    background: url("src/assets/cafe.png");
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
`

const Help = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding: 30px 0;
`

const MiceBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 730px);
    .mice{
        background: url("src/assets/mice.png");
        width: 62px;
        height: 62px;
    }
`

export default TalkPage;