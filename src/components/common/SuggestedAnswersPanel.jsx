import React from 'react';
import styled from "styled-components"

const SuggestedAnswersPanel = ({ answers }) => {
  if(answers.length === 0)
    return (<></>) 
  else
    return (
    <AnswerBlock>
      <div>
      <h2>이렇게 말해 보는 건 어때요?</h2>
      <br/>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {answers.map((answer,index) => (
          <li key={answer}> ({index+1}) {answer}</li>
        ))}
      </ul>
      </div>
    </AnswerBlock>
  );
};

const AnswerBlock = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
    color: #ffffff;
    text-align: left;

    font-weight: 700;
    font-size: 20px;
    line-height: 38px;
    width: 70%;
    padding-bottom: 10px;
    display: flex;
    color: #FFFFFF;

    @media screen and (max-width: 575px){
        font-weight: 700;
        font-size: 14px;
        line-height: 28px;
        width: 80%;
        padding-bottom: 0;
    }
`
export default SuggestedAnswersPanel;
