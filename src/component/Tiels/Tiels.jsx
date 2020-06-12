import React from 'react';

import './TielsContainer.css'


const Tiels = (props) => {
    
    return (
        <div id="game">
            {
                props.allElements.map( c => {
                    return <div key={c.id} num={c.id} onClick={(e) => props.onClick(e)} color={c.color} className={`block color${c.color} ${c.hidden ? 'hidden' : ''}`}></div>
                })
            }
        </div>

    );
}

export default Tiels;
