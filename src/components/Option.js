import React from 'react';


const Option = (props) => 
     (
        <div className='option'>
            <p>{props.count}.{props.optionText}</p>
            
            &ensp;
        <button onClick={(e) => {
                props.removeOption(props.optionText)
            }} className='button button--link'>Remove</button>
        </div>
    );


export default Option;