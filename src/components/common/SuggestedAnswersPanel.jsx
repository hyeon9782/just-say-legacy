import React from 'react';

const SuggestedAnswersPanel = ({ answers }) => {
  if(answers.length === 0)
    return (<></>) 
  else
    return (
    <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        color: '#ffffff',
        textAlign: 'left'
    }}>
      <h2>이렇게 말해 보는건 어때요?</h2>
      <br/>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {answers.map((answer,index) => (
          <li key={answer}> ({index+1}) {answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedAnswersPanel;
