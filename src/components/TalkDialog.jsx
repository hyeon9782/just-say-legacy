import { useAtom } from "jotai";
import { talkAtom } from "../atom/atom";
import styled from "styled-components";
import { forwardRef } from "react";
const TalkDialog = forwardRef((props, ref) => {

    const [talk, setTalk] = useAtom(talkAtom);

    return (
        <TalkBlock ref={ref}
            onClick={(e) => {
                if (e.target === ref.current) ref.current?.close()
            }}>
            <TalkHead>
                <div className="text">{props.head}</div>
                <div className="close" onClick={() => ref.current?.close()}></div>
            </TalkHead>
            <TalkContent>
                {talk && talk.map((item, index) => (
                    <TalkItem key={index}>
                        <div className={item.role === "gpt" ? "gpt-box" : "user-box"}>
                            <div className={item.role === "gpt" ? "gpt" : "user"}>
                                {item.content}
                            </div>
                        </div>
                    </TalkItem>
                )) }
            </TalkContent>
        </TalkBlock>
    )
})

const TalkBlock = styled.dialog`
    width: 375px;
    height: 597px;
    background: #F9FAFC;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    border: 0;
`

const TalkHead = styled.div`
    display: flex;
    justify-content: space-between;
    .text{
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
    }
    .close{
        background: url("./x.png");
        width: 22px;
        height: 22px;
    }
`

const TalkContent = styled.div`
    overflow: auto;
`

const TalkItem = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    padding: 10px;

    .gpt-box{   
        display: flex;
        justify-content: flex-start;
        .gpt{
            background: #919EAB;
            padding: 10px;
            border-radius: 20px;
        }
    }

    .user-box{
        display: flex;
        justify-content: flex-end;
        .user{
            background: #555555;
            padding: 10px;
            border-radius: 20px;
        }
    }
`
export default TalkDialog;