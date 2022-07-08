import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import './GameBuy.css'
import {deleteItemFromCart, setItemInCart} from '../../redux/cart/reducer';

const GameBuy = ({game}) => {
	const dispatch = useDispatch()
	const items = useSelector(state => state.cart.itemsInCart)
	const isItemInCart = items.some(item => item.id === game.id)

	const handleClick = (e) => {
		e.stopPropagation()
		if (isItemInCart) {
			return dispatch(deleteItemFromCart(game.id))
		}
		dispatch(setItemInCart(game))
	}

	return (
		<div className='gameBuy'>
			<span className="gameBuy__price">{game.price} руб.</span>
			<Button
				type={isItemInCart ? "secondary" : "primary"}
				onClick={handleClick}
			>
				{isItemInCart ? 'Убрать из корзины' : 'В Корзину'}
			</Button>
		</div>
	);
};

export default GameBuy;