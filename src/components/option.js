import React from 'react';

const Option = function (props){
    return (
        <div>
            {props.value}
            <button onClick={(e)=>{
                props.handleDeleteOption(props.value);
            }}>Remove</button>
        </div>
    );
}

export default Option;