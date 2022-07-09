import './GameGenre.css'

const GameGenre = ({genre}) => {
	return (
		<span className='gameGenre'>
			{genre}
		</span>
	);
};

export default GameGenre;