import { forwardRef } from 'react';
import styled from 'styled-components';
const EndDialog= forwardRef((props, ref) => {
    return (
        <EndBlock>
            <TextBlock>대화를 정말 끝내시겠어요?</TextBlock>
            <div className='btn-box'>
                <CancleButton onClick={() => ref.current?.close()}>취소하기</CancleButton>
                <EndButton>대화 끝내기</EndButton>
            </div>
        </EndBlock>
    )
})

const EndBlock = styled.div`
    padding: 50px;
    .btn-box{
        display: flex;
        gap: 10px;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
    }
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;
    padding-bottom: 80px;
`

const CancleButton = styled.div`
    width: 325px;
    height: 80.64px;
    background: #F1F4F6;
    border-radius: 10px;

    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #AAB5C0;;
    display: flex;
    justify-content: center;
    align-items: center;
`

const EndButton = styled.div`
    width: 325px;
    height: 80.64px;
    background: #4B8BF6;
    border-radius: 10px;

    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export default EndDialog;