import React from 'react';
import Option from './option.js';

const Options = function (props){
    return (
        <div>
            <div className='widget-header'>
                <h3>Your Options</h3>
                <button className='button button--link' onClick={props.handleDeleteOptions}>Remove All</button>
            </div>      
            {props.options.length===0 && <p className='widget--message'>Please add an option to get rollin</p>}
            {
                props.options.map((value,index)=>{
                    return <Option handleDeleteOption={props.handleDeleteOption} count={index+1} key={index} value={value} />
                })
            }
        </div>
    );
}

export default Options;