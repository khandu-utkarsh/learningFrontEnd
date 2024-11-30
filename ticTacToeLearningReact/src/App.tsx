import React, { useState } from "react";

//!Defining the square properties.

interface SquareProps {
    value: string | null; // Assuming `value` can be a string or null
    onSquareClick: () => void; // Assuming the function doesn't take arguments and returns void
}

// Define the Square component
const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
};

function calculateWinner(squares : string[]) : string | null {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; ++i) {
        const [a, b, c] = lines[i];
        if ( squares[a] && squares[a] == squares[b]  && squares[a] == squares[c]) {
            return squares[a]
        }
    }
    return null;
}

interface BoardProps {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) =>  void
}

const Board: React.FC<BoardProps> = ({xIsNext, squares, onPlay}) => {
    function handleClick(i: number) {
        if(squares[i] || calculateWinner(squares)) return
        const nextSquares : string[] = squares.slice();
        if(xIsNext) nextSquares[i] = "X";
        else nextSquares[i] = "O";
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if(winner) status = "Winner: " + winner
    else status = "Next player: " + (xIsNext ? "X" : "O");

    return (
        <>
        <div className="status">{status}</div>
          <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
}

interface MoveProps {
    move : number
    jumpTo : (move: number) => void;
}

const Move: React.FC<MoveProps> = ({ move, jumpTo }) => {
    let description: string;
    if (move > 0) description = "Go to move #" + move;
    else description = "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
};

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currSquares = history[currentMove];

    function handlePlay(nextSquares : string[]) : void {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) : void{
        setCurrentMove(nextMove)
    }
    
    const moves = history.map((squares : string[], move: number) => (
        < Move key={move} move={move} jumpTo={jumpTo} />
    ));

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currSquares} onPlay={handlePlay}></Board>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}