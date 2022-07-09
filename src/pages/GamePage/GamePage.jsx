import './GamePage.css'
import { useSelector } from 'react-redux';
import GameCover from '../../components/GameCover/GameCover';
import GameGenre from '../../components/GameGenre/GameGenre';
import GameBuy from '../../components/GameBuy/GameBuy';

const GamePage = () => {
	const game = useSelector(state => state.game.currentGame)

	if(!game) return null

	return (
		<div className='gamePage'>
			<h1 className="gamePage__title">{game.title}</h1>
			<div className="gamePage__content">
				<div className="gamePage__left">
					<iframe
						width={"90%"}
						height="400px"
						src={game.video}
						title={game.title}
					/>
				</div>
				<div className="gamePage__right">
					<GameCover image={game.image} />
					<p className='gamePage__description'>{game.description}</p>
					<p className="secondary-text">Популярные метки этого продукта:</p>
					{game.genres.map(genre => (
						<GameGenre genre={genre} key={genre}/>
					))}
					<div className="gamePage__buy-game">
						<GameBuy game={game}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GamePage;