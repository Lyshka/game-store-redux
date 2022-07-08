import Button from '../Button/Button';
import './GameBuy.css'

const GameBuy = ({game}) => {
	return (
		<div className='gameBuy'>
			<span className="gameBuy__price">{game.price} руб.</span>
			<Button
				type="primary"
				onClick={() => {}}
			>
				В Корзину
			</Button>
		</div>
	);
};

export default GameBuy;