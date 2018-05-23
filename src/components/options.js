import React from 'react';
import Option from './option.js';

const Options = function (props){
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0 && <p>Please add an option to get rollin</p>}
            {
                props.options.map((value,index)=>{
                    return <Option handleDeleteOption={props.handleDeleteOption} key={index} value={value} />
                })
            }
        </div>
    );
}

export default Options;