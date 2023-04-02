import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { infoAtom } from "../atom/atom";
import { useAtom } from "jotai";
const LoadingPage = () => {
    const navigate = useNavigate();

    const [info, setInfo] = useAtom(infoAtom);

    useEffect(() => {
        setTimeout(() => {
            navigate('/ready')
        }, 1000)
    },[])

    return (
        <LoadingBlock>  
            <TextBlock>{info.city.name}으로 가는 중..</TextBlock>
            <ImageBlock>
                <div className="plane">
                    <img src="img/plane.png" alt="plane" width="100%" height="100%"/>
                </div>
                <div className="earth">
                    <img src="img/earth.png" alt="earth" width="100%" height="100%"/>
                </div>
            </ImageBlock>
        </LoadingBlock>
    )
}

const LoadingBlock = styled.div`
    box-sizing: border-box;
    width: 1280px;
    margin: 0 auto;
    padding: 24px 14px;
    @media screen and (max-width: 575px){
        width: 100%;
        height: 100vh;
        padding: 0;
    }
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
    text-align: center;

    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 50%);
    }
`

const ImageBlock = styled.div`
    .plane{
        width: 100px;
        height: 100px;
        
        /* transform: rotate(13deg); */

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        animation: spin 1s linear infinite;

    }

    .earth{
        width: 1400px;
        height: 450px;
    }

    @media screen and (max-width: 575px){
        .earth{
            width: 100%;
        }
    }
`

export default LoadingPage;