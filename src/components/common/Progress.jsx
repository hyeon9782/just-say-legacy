import { useAtomValue } from "jotai";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import { currentAtom, progressAtom } from "../../atom/atom"
const Progress = () => {
    const location = useLocation();
    const { language, city, category } = useAtomValue(progressAtom);
    const current = useAtomValue(currentAtom);
    return (
        <ProgressBlock>
            <div><span className={location.pathname === "/language" ? "current" : "item"}>{language}</span>ㅣ</div>
            <div><span className={location.pathname === "/city" ? "current" : "item"}>{city}</span>ㅣ</div>
            <div><span className={location.pathname === "/category" ? "current" : "item"}>{category}</span></div>
        </ProgressBlock>
    )
}

const ProgressBlock = styled.div`
    display: flex;
    font-size: 1.1rem;
    font-weight: bold;
    color: lightgray;
    .current {
        color: black;
    }
    .item {
        color: lightgray;
    }
`

export default Progress;