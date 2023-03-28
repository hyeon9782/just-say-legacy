import styled from "styled-components"
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { progressAtom } from "../atom/atom";

const LanguagePage = () => {
    const [progress, setProgress] = useAtom(progressAtom);

    const navigate = useNavigate();

    const languages = ["언어 선택", "영어", "한국어", "일본어"]

    const handleChange = (e) => {
        console.log(e.target.value)
        setProgress({
            ...progress,
            language: e.target.value
        })
        navigate('/city')
    }

    return (
        <LanguagePageBlock>
            <LogoBlock>Just Say!</LogoBlock>
            <TextBlock>어떤 언어로 말하시겠어요?</TextBlock>
            <SelectBlock>
                <select onChange={handleChange}>
                    {languages.map((language, index) => <option key={index} value={language}>{language}</option>)}
                </select>
            </SelectBlock>
        </LanguagePageBlock>
    )
}

const LanguagePageBlock = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LogoBlock = styled.div`
    font-size: 4rem;
    font-weight: bold;
    padding: 20px 10px;
    margin-top: -50px;
`

const TextBlock = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    padding: 20px 10px;
`

const SelectBlock = styled.div`
    
    select{
        font-size: 1rem;
        width: 290px;
        height: 35px;
    }
`
export default LanguagePage;