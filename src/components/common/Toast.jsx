import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
const Toast = forwardRef(({ location, content, color, background }, ref) => {
    const [visible, setVisible] = useState(true);

    const showToast = () => {
        setVisible(true)
    }
    const hideToast = () => {
        setVisible(false)
    }

    useImperativeHandle(ref, () => ({
        showToast,
        hideToast
    }))

    return (visible && (
        <ToastBlock location={location} background={background} color={color}>
            {content}
        </ToastBlock>
    ))
})

const ToastBlock = styled.div`
    max-height: 70px;
    min-width: 300px;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 20px 15px;
    text-align: center;
    opacity: 0.7;
    position: absolute;
    z-index: 9999;
    bottom: 22%;
    right: 45%;
    justify-content: center;
    background: ${props => props.background};
    color: ${props => props.color};

    @media screen and (max-width: 1300px){
        bottom: 30%;
        right: 0;
    }

    @media screen and (max-width: 575px){
        bottom: 10%;
        right: 20%;
    }
`

export default Toast;