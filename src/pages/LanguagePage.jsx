import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { infoAtom } from "../atom/atom";
import Back from "../components/common/Back";
import Container from "../components/common/Container";

const LanguagePage = () => {
    const [info, setInfo] = useAtom(infoAtom);

    const navigate = useNavigate();

    const languages = [
        {
            name : "영어",
            value :"english",
        }, 
        {
            name : "일본어",
            value :"japanese",
        }, 
    ]

    const handleClick = (language) => {
        setInfo({
            ...info,
            language,
        })
        navigate('/city')
    }

    return (
        <LanguageBlock>
            <Back />
            <div className="container">
                <TextBlock>
                    이제부터 여행을 떠나봅시다! <br />
                    내가 말할 언어를 골라주세요.
                </TextBlock>
                <SelectBlock>
                    {languages.map((language, index) => <div className="language-item" onClick={() => handleClick(language)} key={index}>{language.name}</div>)}
                </SelectBlock>
            </div>
        </LanguageBlock>
    )
}

const LanguageBlock = styled.div`
    box-sizing: border-box;
    width: 1280px;
    margin: 0 auto;
    padding: 24px 14px;
    height: 100vh;
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* box-sizing: border-box; */
        height: calc(100vh - 42px);
    }
`

const TextBlock = styled.div`
    font-weight: 700;
    font-size: 64px;
    line-height: 76px;
    padding: 30px 0px 200px 0px;
    /* box-sizing: border-box; */
`

const SelectBlock = styled.div`
    /* box-sizing: border-box; */
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
    color: #FFFFFF;
    .language-item{
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        width: 463px;
        height: 99px;
        border-radius: 50px;
        background: #4B8BF6;
        &:hover{
            background: white;
            color: #4B8BF6;
            border: 1px solid #4B8BF6;
        }
    }
    
`
export default LanguagePage;