import styled from "styled-components"
import { useLocation, useNavigate } from 'react-router-dom';
import Progress from "./Progress";
import { useSetAtom } from "jotai";
import { progressAtom } from "../../atom/atom";
const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const setProgress = useSetAtom(progressAtom);
    const logoClick = () => {
        setProgress({
            language: "언어",
            city: "도시",
            category: "카테고리"
        })
        navigate('/')
    }
    return (
        <HeaderBlock>
            <div className={location.pathname === "/" ? 'hidden' : 'block'}>
                <LogoBlock onClick={logoClick}>Just Say!</LogoBlock>
                <Progress />
                <div className={location.pathname === "/talk" ? "stop-btn" : 'hidden'}>대화 종료</div>
            </div>
        </HeaderBlock>
    )
}

const HeaderBlock = styled.div`
    
    .block{
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        align-items: center;
        border-bottom: 1px solid black;
    }
    .hidden{
        display: none;
    }

    .stop-btn {
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 30px;
        border: 1px solid black;
        padding: 10px 20px;
    }
`

const LogoBlock = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`


export default Header;