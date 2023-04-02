import { forwardRef } from "react";
import styled from "styled-components"
const Dialog = forwardRef((props, ref) => {
    return (
        <>
            <DialogBlock 
                ref={ref}
                onClick={(e) => {
                    if (e.target === ref.current) ref.current?.close()
                }}
            >
                <DialogHead>
                    <div className="close" onClick={() => ref.current?.close()}></div>
                </DialogHead>
                <DiaLogContent>
                    {props.children}
                </DiaLogContent>
            </DialogBlock>
        </>
    )
})

const DialogBlock = styled.dialog`
    /* padding: 50px; */
    border-radius: 30px;
    border: 0;
`

const DialogHead = styled.div`
    display: flex;
    justify-content: flex-end;
    .close{
        background: url("src/assets/x.png");
        width: 20px;
        height: 20px;
    }
`

const DiaLogContent = styled.div`
    
`

export default Dialog;