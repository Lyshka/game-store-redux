import "./GameCover.css"

const GameCover = ({image = ""}) => {
	return (
		<div>
			<img className="gameCover" src={image} alt={"game"} />
		</div>
	);
};

export default GameCover;