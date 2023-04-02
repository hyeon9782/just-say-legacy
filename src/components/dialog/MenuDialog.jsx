import { forwardRef } from "react";
import styled from "styled-components";
const MenuDialog = forwardRef((props, ref) => {
    return (
        <MenuBlock ref={ref}
            onClick={(e) => {
                if (e.target === ref.current) ref.current?.close()
            }}>
            <Head>
                <div className="close" onClick={() => ref.current?.close()}></div>
            </Head>
        </MenuBlock>
    )
})

const MenuBlock = styled.dialog`
    width: 500px;
    height: 677.88px;
    border: 0;
    padding: 0;
    background: url("img/menu.png");
    @media screen and (max-width: 575px){
        width: 100%;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: flex-end;
    .close {
        width: 22px;
        height: 22px;
        background: url("img/x.png");
        margin: 10px;
    }
`

export default MenuDialog;