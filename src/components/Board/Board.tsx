import { SquareContent } from "../../types";
import Square from "../Square/Square";


interface Props {
    xIsNext: boolean
    squares: Array<SquareContent>
    onPlay: (nexSquares: Array<SquareContent>) => void
}

const Board: React.FC<Props> = (props) => {
    function handleClick(i: number) {
        console.log('handleClick');
        if (calculateWinner(props.squares) || props.squares[i]) {
            return;
        }
        const nextSquares = props.squares.slice();
        nextSquares[i] = { value: props.xIsNext ? 'X' : 'O' };
        props.onPlay(nextSquares);
    }

    const winner = calculateWinner(props.squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square content={props.squares[0]} onSquareClick={() => handleClick(0)} />
                <Square content={props.squares[1]} onSquareClick={() => handleClick(1)} />
                <Square content={props.squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square content={props.squares[3]} onSquareClick={() => handleClick(3)} />
                <Square content={props.squares[4]} onSquareClick={() => handleClick(4)} />
                <Square content={props.squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square content={props.squares[6]} onSquareClick={() => handleClick(6)} />
                <Square content={props.squares[7]} onSquareClick={() => handleClick(7)} />
                <Square content={props.squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares: Array<SquareContent>) {
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default Board