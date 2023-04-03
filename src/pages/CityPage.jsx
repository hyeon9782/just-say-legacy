import styled from "styled-components"
import Container from '../components/common/Container'
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { infoAtom } from "../atom/atom";
import Back from "../components/common/Back";
const CityPage = () => {

    const [info, setInfo] = useAtom(infoAtom);

    const citys = [
        { name: "도쿄", value: "ja-JP"},
        { name: "오사카", value: "ja-JP"},
        { name: "고베", value: "ja-JP"},
        { name: "후쿠오카", value: "ja-JP"},
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
            <div className="back-box">
                <Back />
            </div>
            <div className="container">
                <TextBlock>
                    <div className="main">어디로 갈까요?</div>
                    <div className="sub">선택한 도시의 억양이 내가 대화할 상대방에게 반영됩니다.</div>
                </TextBlock>
                <SelectBlock>
                    {info.language.value === 'japanese' ? 
                        citys.map((city, index) => {
                            if (city.value === 'ja-JP') {
                                return (
                                    <div key={index} className="city-item" onClick={() => handleClick(city)}>
                                        <div className="name">{city.name}</div>
                                        <img src={`img/${city.name}.png`} alt="dd" width="100%" height="100%"/>
                                    </div>
                                )
                            }
                        }) : 
                        citys.map((city, index) => {
                            if (city.value !== 'ja-JP') {
                                return (
                                    <div key={index} className="city-item" onClick={() => handleClick(city)}>
                                        <div className="name">{city.name}</div>
                                        <img src={`img/${city.name}.png`} alt="dd" width="100%" height="100%"/>
                                    </div>
                                )
                            }
                        })
                    }
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
    height: 100vh;

    .back-box{

    }
    
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: calc(100vh - 42px);
    }

    @media screen and (max-width: 575px){
        /* margin: 0 auto; */
        width: 100%;
        /* height: 100vh; */
        display: flex;
        flex-direction: column;
        .container{
            /* height: calc(100vh - 22px); */
        }

        .back-box{
            /* height: ; */
        }
    }
`

const TextBlock = styled.div`
    .main{
        font-weight: 700;
        font-size: 64px;
        line-height: 76px;
        padding: 10px 0;
    }
    .sub{
        font-weight: 400;
        font-size: 32px;
        line-height: 38px;
        padding: 20px 0 60px 0;
    }
    @media screen and (max-width: 575px){
        .main{
            font-weight: 700;
            font-size: 28px;
            line-height: 33px;
            text-align: center;
            padding: 30px 0;
        }

        .sub{
            display: none;
        }
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

    @media screen and (max-width: 575px){
        gap: 40px;
        .city-item{
            width: 100%;
            height: 220px;

            .name{
                font-weight: 700;
                font-size: 28px;
                line-height: 33px;
            }
        }
    }
`
export default CityPage;