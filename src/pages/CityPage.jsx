import styled from "styled-components"
import Container from '../components/common/Container'
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { progressAtom } from "../atom/atom";
const CityPage = () => {

    const [progress, setProgress] = useAtom(progressAtom);

    const citys = ["뉴욕", "런던", "시드니", "뭄바이"]

    const navigate = useNavigate();

    const handleClick = (city) => {
        setProgress({
            ...progress,
            city
        })
        navigate('/category')
    }
    
    return (
        <Container>
            <CityBlock>
                <TextBlock>어디로 따나볼까요?</TextBlock>
                <SelectBlock>
                    {citys.map((city, index) => <div key={index} className="city-item" onClick={() => handleClick(city)}>{city}</div>)}
                </SelectBlock>
            </CityBlock>
        </Container>
    )
}
const CityBlock = styled.div`
    padding-top: 250px;
`

const TextBlock = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 30px 0px;
`

const SelectBlock = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: 1.6rem;
    font-weight: bold;
    .city-item{
        border: 1px solid black;
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default CityPage;