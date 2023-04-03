import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { infoAtom } from "../atom/atom";
import { useAtom } from "jotai";
const LoadingPage = () => {
    const navigate = useNavigate();

    const [info, setInfo] = useAtom(infoAtom);

    useEffect(() => {
        // updatePlanePosition()
        setTimeout(() => {
            navigate('/ready')
        }, 4000)
    },[])

    setInterval(updatePlanePosition, 50);

    function updatePlanePosition() {

        const earthContainer = document.querySelector('.earth-container');
        const planeImage = document.querySelector('.plane');
        const earthRect = earthContainer.getBoundingClientRect();

        const radians = Date.now() / 1000;
        const distance = earthRect.width / 2;
        const x = Math.cos(radians) * distance + earthRect.left + earthRect.width / 2;
        const y = Math.sin(radians) * distance + earthRect.top + earthRect.height / 2;
        planeImage.style.transform = `translate(${x}px, ${y}px)`;
    }


    return (
        <LoadingBlock>  
            <TextBlock>{info.city.name}으로 가는 중..</TextBlock>
            <ImageBlock>
                <div className="earth-container">
                    <div className="plane">
                        <img src="img/비행기.png" alt="plane" width="100%" height="100%"/>
                    </div>
                    <div className="earth">
                        <img src="img/지구.png" alt="earth" width="100%" height="100%"/>
                    </div>
                </div>
            </ImageBlock>
        </LoadingBlock>
    )
}

const LoadingBlock = styled.div`
    box-sizing: border-box;
    width: 1280px;
    height: 100vh;
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 28px;
        line-height: 33px;
        height: 50%;
    }
`

const ImageBlock = styled.div`
    height: 50%;
    position: relative;
    overflow: hidden;

    .earth-containe{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .plane{
        position: absolute;
        top: 50px;
        left: -50px;
        width: 100px;
        height: 100px;
        animation: rotate 10s infinite linear;
    }

    .earth{
        width: 100%;
        min-height: 100%;
        position: absolute;
        top: 50%;
        left: 0;
    }

    @media screen and (max-width: 575px){
        height: 50%;

        .plane{
            top: -50px;
            left: -50px;
        }
        .earth{
            width: 100%;
            height: 100%;
        }
    }
`

export default LoadingPage;