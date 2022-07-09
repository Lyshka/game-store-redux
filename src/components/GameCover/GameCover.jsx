import "./GameCover.css"

const GameCover = ({onClick, image = ""}) => {
	return (
		<div>
			<img className="gameCover" src={image} alt={"game"} onClick={onClick} />
		</div>
	);
};

export default GameCover;