import './GameItem.css'
import GameCover from "../GameCover/GameCover"
import GameBuy from "../GameBuy/GameBuy"
import GameGenre from "../GameGenre/GameGenre"
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setCurrentGame} from '../../redux/games/reducer';

const GameItem = ({game}) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(setCurrentGame(game))
		navigate(`/app/${game.title}`)
	}

	return (
		<div className='gameItem' onClick={handleClick}>
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