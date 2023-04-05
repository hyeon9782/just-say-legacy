import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom';
import TalkDialog from "../components/dialog/TalkDialog"
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { infoAtom } from "../atom/atom";
import X from '/img/x.png';
import Icon1 from '/img/icon.png';
import Icon2 from '/img/icon1.png';
const ResultPage = () => {
    const navitate = useNavigate();

    const { bool } = useParams();

    const [isResult, setIsResult] = useState(true);

    const [isClick, setClick] = useState(true);

    const [isClick1, setClick1] = useState(true);

    const [info, setInfo] = useAtom(infoAtom);

    const talk = useRef(null);

    const tags = [
        {name: "언어 바꾸기", value: ""},
        {name: "도시 바꾸기", value: ""},
        {name: "같은 직원과 다시 대화하기", value: ""},
        {name: "다른 직원과 다시 대화하기", value: ""},
    ]

    useEffect(() => {
        if(bool === "success") setIsResult(true);
        else setIsResult(false);        
    },[])

    const handleClick = (value) => {
        switch (value.name) {
            case "언어 바꾸기" : navitate('/language'); break;
            case "도시 바꾸기" : navitate('/city'); break;
            case "같은 직원과 다시 대화하기" : navitate('/talk'); break;
            case "다른 직원과 다시 대화하기" : navitate('/talk'); break;
        }
    }
    return (
        <>
            <ResultBlock>
                <CloseBlock>
                    <div className="close" onClick={() => navitate('/')}></div>
                </CloseBlock>
                <TextBlock>
                    <div className="sub">카페에서 음료와 음식 주문하기</div>
                    <div className="main">
                        {isResult ? "주문 성공🎉" : "앗, 다시 말해볼까요?"}
                    </div>
                </TextBlock>
                <TagBlock>
                    {tags.map((tag, index) => (
                        <div key={index} className="tag-item" onClick={() => handleClick(tag)}>{tag.name}</div>
                    ))}
                </TagBlock>
                <QuestionBlock>
                    <div className="question">대화는 어떠셨나요?</div>
                    <div className="like-block">
                        <div className={isClick ? "icon-box" : "icon-box blue"} onClick={() => setClick(!isClick)}>
                            <div className="icon-1">
                                <img src={Icon1} alt="icon-1" width="100%" height="100%"/>
                            </div>
                        </div>
                        <div className={isClick1 ? "icon-box" : "icon-box blue"} onClick={() => setClick1(!isClick1)}>
                            <div className="icon-2">
                                <img src={Icon2} alt="icon-2" width="100%" height="100%"/>
                            </div>
                        </div>
                    </div>
                    <div className="talk-view-block">
                        <div className="talk-view" onClick={() => talk.current.showModal()}>전체 대화 보기</div>
                    </div>
                </QuestionBlock>
                <TalkDialog ref={talk} head="실시간 대화 내용"></TalkDialog>
            </ResultBlock>
        </>
    )
}

const ResultBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 72px);

    @media screen and (max-width: 575px){
        width: 100%;
        height: 100vh;
    }

`

const CloseBlock = styled.div`
    position: absolute;
    top: 50px;
    right: 50px;
    .close{
        width: 22px;
        height: 22px;
        background: url(${X});
    }

    @media screen and (max-width: 575px){
        top: 30px;
        right: 30px;
    }
`

const TextBlock = styled.div`
    text-align: center;
    .sub{
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        padding: 10px 0;
    }

    .main{
        font-weight: 700;
        font-size: 64px;
        line-height: 76px;
        padding: 10px 0 50px 0;
    }

    @media screen and (max-width: 575px){
        
        padding: 10px 0;

        .sub{
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;
        }

        .main{
            font-weight: 700;
            font-size: 36px;
            line-height: 43px;
        }
    }
`

const TagBlock = styled.div`
    box-sizing: border-box;
    width: 1100px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0 150px 0;
    .tag-item{
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #4B8BF6;
        background: #F9FAFC;
        border: 1px solid #4B8BF6;
        border-radius: 20px;
        padding: 8px 20px;
    }

    @media screen and (max-width: 575px){
        box-sizing: border-box;
        width: 60%;
        flex-wrap: wrap;
        gap: 30px;
        padding: 10px 0 50px 0;
        .tag-item{
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
        }
    }
`

const QuestionBlock = styled.div`

    .question{
        font-weight: 400;
        font-size: 28px;
        line-height: 33px;
        padding: 10px 0;
    }
    .like-block{
        display: flex;
        justify-content: space-between;
        padding: 10px 0 30px 0;
        .icon-box{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 82px;
            height: 47.56px;
            border: 1px solid #EEEEEE;
            border-radius: 20px;
            .icon-1{
                width: 22.96px;
                height: 22.96px;
            }

            .icon-2{
                width: 22.96px;
                height: 22.96px;
            }
        }
    }

    .blue{
        background: #4B8BF6 !important;
        border: 1px solid #4B8BF6;
    }

    .talk-view-block{
        display: flex;
        justify-content: center;
        .talk-view{
            /* box-sizing: border-box; */
            width: 180px;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            padding: 8px 0px;
            background: #D9EFF7;
            border-radius: 20px;
            text-align: center;
        }
    }

    @media screen and (max-width: 575px){
        .question{
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            text-align: center;
        }

        .like-block{

            .icon-box{
                width: 60px;
                height: 30px;
                .icon-1{
                    width: 14px;
                    height: 14px;
                }
        
                .icon-2{
                    width: 14px;
                    height: 14px;
                }
            }
        }

        .talk-view-block{
        
            .talk-view{
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
            }
        }


    }

    
`

export default ResultPage;