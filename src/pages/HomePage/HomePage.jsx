import './HomePage.css'
import GameItem from '../../components/GameItem/GameItem'
import { useEffect, useState } from 'react';
import axios from '../../components/utils'

const HomePage = () => {
	const [games, setGames] = useState([])

	const getGames = async () => {
		const response = await axios.get('/game')
		const games = response.data

		setGames(games)
	}

	useEffect(() => {
		getGames()
	}, [])
	
	return (
		<div className='homePage'>
			{games.map(game => (
				<GameItem game={game} key={game.id} />
			))}
		</div>
	);
};

export default HomePage;