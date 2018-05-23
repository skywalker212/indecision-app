import React from 'react';

const Option = function (props){
    return (
        <div className="option">
            <p>{props.count}. {props.value}</p>
            <button className='button button--link' onClick={(e)=>{
                props.handleDeleteOption(props.value);
            }}>Remove</button>
        </div>
    );
}

export default Option;