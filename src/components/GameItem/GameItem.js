import './GameItem.css'
import GameCover from "../GameCover/GameCover"
import GameBuy from "../GameBuy/GameBuy"
import GameGenre from "../GameGenre/GameGenre"

const GameItem = ({game}) => {
	return (
		<div className='gameItem'>
			<GameCover image={game.image} />
			<div className="gameItem__details">
				<span className="gameItem__title">{game.title}</span>
				<div className="gameItem__genre">
					{game.genres.map(genre => <GameGenre genre={genre} key={genre} />)}
				</div>
				<div className="gameItem__buy">
					<GameBuy game={game} />
				</div>
			</div>
		</div>
	);
};

export default GameItem;