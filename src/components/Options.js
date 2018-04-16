import React from 'react';
import Option from'./Option';

const Options = (props) => 
     (
        <div>
            <div className='widget-header'>
                <h3>Your Options</h3>
                <button
                    onClick={props.removeAll}
                    className='button button--link'
                >Remove All</button>
            </div>


            {props.option.length === 0 && <p className='widget__message'>
            Add an option to start!</p>}
           
                {
                    props.option.map((val, i) => <Option key={i} optionText={val} count={i+1} removeOption={props.removeOption} />)
                }
       

            
        </div>
    );


export default Options;