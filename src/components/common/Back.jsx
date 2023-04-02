import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
const Back = () => {
    const navigate = useNavigate();
    return (
        <BackBlock onClick={() => navigate(-1)}></BackBlock>
    )
}

const BackBlock = styled.div`
    background: url("src/assets/left-arrow 1.png");
    width: 42px;
    height: 42px;
    margin: 0;
`
export default Back;