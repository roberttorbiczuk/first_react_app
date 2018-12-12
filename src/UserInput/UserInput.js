import React from 'react';
import './UserInput.css';

const userInput = (props) => {
  const style = {
    backgroundColor: 'yellow',
    fontWeight: 'bold',
    border: '2px solid red',
    padding: '10px',
  };

  return (
    <div className='UserInput'>
      <input style={style} type='text' onChange={props.changed} value={props.userName}/>
    </div>
)
};

export default userInput;
