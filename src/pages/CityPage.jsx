import styled from "styled-components"
import Container from '../components/common/Container'
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { infoAtom } from "../atom/atom";
import Back from "../components/common/Back";
const CityPage = () => {

    const [info, setInfo] = useAtom(infoAtom);

    const citys = [
        { name: "뉴욕", value: "en-US"},
        { name: "런던", value: "en-GB"},
        { name: "시드니", value: "en-AU"},
        { name: "더블린", value: "en-IN"},
    ]

    const navigate = useNavigate();

    const handleClick = (city) => {
        setInfo({
            ...info,
            city,
        })
        navigate('/loading')
    }
    
    return (
        <CityBlock>
            <Back />
            <div className="container">
                <TextBlock>
                    <div className="main">어디로 갈까요?</div>
                    <div className="sub">선택한 도시의 억양이 내가 대화할 상대방에게 반영됩니다.</div>
                </TextBlock>
                <SelectBlock>
                    {citys.map((city, index) => (
                        <div key={index} className="city-item" onClick={() => handleClick(city)}>
                            <div className="name">{city.name}</div>
                            <img src={`img/${city.name}.png`} alt="dd" width="100%" height="100%"/>
                        </div>
                    ))}
                </SelectBlock>
            </div>
        </CityBlock>
    )
}
const CityBlock = styled.div`
    box-sizing: border-box;
    width: 1280px;
    margin: 0 auto;
    padding: 24px 14px;
    
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: calc(100vh - 42px);
    }
`

const TextBlock = styled.div`
    .main{
        font-weight: 700;
        font-size: 64px;
        line-height: 76px;
        font-feature-settings: 'cpsp' on;
        padding: 10px 0;
    }
    .sub{
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        padding: 20px 0 60px 0;
    }
`

const SelectBlock = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 80px;
    box-sizing: border-box;
    
    
    .city-item{
        width: 552px;
        height: 268px;
        border-radius: 20px;
        box-sizing: border-box;

        font-weight: 700;
        font-size: 56px;
        line-height: 67px;
        text-align: right;
        border: 1px solid #EEEEEE;
        position: relative;

        &:hover{
            border: 5px solid #4B8BF6;
        }

        .name{
            position: absolute;
            color: white;
            top: 170px;
            left: 370px;
        }
    }
`
export default CityPage;