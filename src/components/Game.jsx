import React, { useState, useEffect } from 'react';
import { Board } from '.';
import { getWinner } from '../utils';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [attemps, setAttemps] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const winner = getWinner(board);
        if (winner.winner) {
            setGameOver(winner);
            return;
        }
        if (attemps === 9) {
            setGameOver({
                winner: 'Победитель не выявлен'
            });
            return;
        }
    }, [board, attemps]);


    const handleClick = index => {
        if (gameOver || board[index]) return;
        setAttemps(a => a + 1);
        const boardCopy = [...board];
        boardCopy[index] = xIsNext ? 'X' : '0';
        setBoard(boardCopy);
        setXIsNext(actual => !actual);
    }

    const start = e => {
        e.preventDefault();
        setBoard(Array(9).fill(null));
        setGameOver(false);
        setAttemps(0);
    }

    return (
        <div className='game'>
            <h1>React Game</h1>
            <button
                className='start-btn'
                onClick={start}
            >
                Новая игра
            </button>
            <Board
                squares={board}
                handleClick={handleClick}
                gameOver={gameOver}
            />
            <p className='info'>
                {gameOver ? (
                    <>
                        <span>Игра окончена!</span>
                        <span>{gameOver.winner}!</span>
                    </>

                ) :
                    (
                        'Следующий ход:' + (xIsNext ? '    X' : '  0')
                    )

                }
            </p>
        </div>
    )
}

export default Game;