import styled from "styled-components"
import Container from '../components/common/Container'
import TalkButton from "../components/TalkButton"
const TalkPage = () => {
    return (
        <Container>
            <TalkBlock>
                <ImageBlock>이미지</ImageBlock>
                <TalkButton>음성 인식 시작</TalkButton>
                <Help>버튼을 누른 채로 말해주세요.</Help>
            </TalkBlock>
        </Container>
    )
}

const TalkBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;
`

const ImageBlock = styled.div`
    width: 700px;
    height: 500px;
    background: lightgray;
    
    // 이미지 들어오면 삭제
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 4rem;
`



const Help = styled.div`
    font-weight: bold;
`

export default TalkPage;