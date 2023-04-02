import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
const LoadingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/ready')
        }, 3000)
    },[])

    return (
        <LoadingBlock>  
            <TextBlock>{}뉴욕으로 가는 중..</TextBlock>
            <ImageBlock>
                <div className="plane"></div>
                <div className="earth"></div>
            </ImageBlock>
        </LoadingBlock>
    )
}

const LoadingBlock = styled.div`
    box-sizing: border-box;
    width: 1280px;
    margin: 0 auto;
    padding: 24px 14px;
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
    text-align: center;
`

const ImageBlock = styled.div`
    .plane{
        width: 100px;
        height: 100px;
        background: url("src/assets/plane.png");
        
        /* transform: rotate(13deg); */

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        animation: spin 6s linear infinite;

    }

    .earth{
        width: 1400px;
        height: 450px;
        background: url("src/assets/earth.png");
    }
`

export default LoadingPage;