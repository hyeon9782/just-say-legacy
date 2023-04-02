import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
const ResultPage = () => {
    const navitate = useNavigate();
    const tags = [
        {name: "언어 바꾸기", value: ""},
        {name: "도시 바꾸기", value: ""},
        {name: "같은 직원과 다시 대화하기", value: ""},
        {name: "다른 직원과 다시 대화하기", value: ""},
    ]

    const handleClick = (value) => {
        switch (value.name) {
            case "언어 바꾸기" : navitate('/language');
            case "도시 바꾸기" : navitate('/city');
            case "같은 직원과 다시 대화하기" : navitate('/talk');
            case "다른 직원과 다시 대화하기" : navitate('/talk');
        }
        
    }
    return (
        <>
            <CloseBlock>
                <div className="close" onClick={() => navitate('/')}></div>
            </CloseBlock>
            <ResultBlock>
                <TextBlock>
                    <div className="sub">카페에서 음료와 음식 주문하기</div>
                    <div className="main">주문 성공🎉</div>
                </TextBlock>
                <TagBlock>
                    {tags.map((tag, index) => (
                        <div key={index} className="tag-item" onClick={() => handleClick(tag)}>{tag.name}</div>
                    ))}
                </TagBlock>
                <QuestionBlock>
                    <div className="question">대화는 어떠셨나요?</div>
                    <div className="like-block">
                        <div className="icon-box">
                            <div className="icon-1"></div>
                        </div>
                        <div className="icon-box">
                            <div className="icon-2"></div>
                        </div>
                    </div>
                    <div className="talk-view-block">
                        <div className="talk-view">전체 대화 보기</div>
                    </div>
                </QuestionBlock>
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

`

const CloseBlock = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    .close{
        width: 22px;
        height: 22px;
        background: url("./x.png");
        margin: 50px 100px 0px 0px;
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
`

const TagBlock = styled.div`
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
                background: url("./icon.png");
                width: 22.96px;
                height: 22.96px;
            }

            .icon-2{
                background: url("./icon1.png");
                width: 22.96px;
                height: 22.96px;
            }
        }
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

    
`

export default ResultPage;