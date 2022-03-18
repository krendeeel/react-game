import React from 'react';
import { Square } from '.';

const Board = ({ squares, handleClick, gameOver }) => {
    return (
        <div className='board'>
            {
                squares?.map((square, index) => (
                    <Square
                        key={index}
                        win={gameOver?.index?.includes(index)}
                        value={square}
                        onClick={() => handleClick(index)}
                        gameOver={gameOver}
                    />
                ))
            }
        </div>
    )
}

export default Board;