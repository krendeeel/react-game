import React from 'react';

const Square = ({ value, onClick, win }) => {
    return (
        <button
            style={{ background: win ? 'rgb(248, 64, 64)' : 'white' }}
            className='square'
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Square;