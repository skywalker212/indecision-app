import React from 'react';

const Action = function (props){
    return (
        <div>
            <button className='big-button' disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    );
}

export default Action;