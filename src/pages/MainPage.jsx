import styled from "styled-components"
import Container from '../components/common/Container'
import { useNavigate } from 'react-router-dom';
import { useAtomValue } from "jotai";
import { progressAtom } from "../atom/atom";
const MainPage = () => {
    const navigate = useNavigate();
    const { category } = useAtomValue(progressAtom);
    return (
        <Container>
            <MainBlock>
                <TextBlock>
                    {category}에 도착!
                </TextBlock>
                <TextBlock>
                    아래 메뉴를 보고, 원하는 메뉴를 주문해보세요.
                </TextBlock>
                <MenuBlock>
                    메뉴 이미지
                </MenuBlock>
                <StartButton onClick={() => navigate('/talk')}>시작하기</StartButton>
            </MainBlock>
        </Container>
    )
}

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 250px;
`

const TextBlock = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
    padding-bottom: 10px;
`

const MenuBlock = styled.div`
    width: 700px;
    height: 350px;
    background: lightgray;
    margin: 30px 0;
    // 이미지 나오면 삭제
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
`

const StartButton = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 1.2rem;
    background: white;
    border: 1px solid wheat;
`
export default MainPage;