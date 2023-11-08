import { SquareContent } from "../../types";


interface Props {
    content: SquareContent
    onSquareClick: () => void
}

const Square: React.FC<Props> = (props) => {
    return (
        <button className="square" onClick={props.onSquareClick}>
            {props.content.value}
        </button>
    );
}

export default Square