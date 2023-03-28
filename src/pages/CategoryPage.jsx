import styled from "styled-components"
import Container from '../components/common/Container'
import { useNavigate } from 'react-router-dom';
import { useAtom } from "jotai";
import { progressAtom } from "../atom/atom";
const CategoryPage = () => {

    const [progress, setProgress] = useAtom(progressAtom);

    const navigate = useNavigate();

    const categorys = ["공항", "택시", "식당", "카페"]

    const handleClick = (category) => {
        setProgress({
            ...progress,
            category
        })
        navigate('/main')
    }

    return (
        <Container>
            <CategoryPageBlock>
                <TextBlock>유럽 도착! 어디로 가볼까요?</TextBlock>
                <SelectBlock>
                    {categorys.map((category, index) => <div key={index} className="category-item" onClick={() => handleClick(category)}>{category}</div>)}
                </SelectBlock>
            </CategoryPageBlock>
    </Container>
    )
}

const CategoryPageBlock = styled.div`
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
    .category-item{
        border: 1px solid black;
        height: 200px;
        width: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export default CategoryPage;