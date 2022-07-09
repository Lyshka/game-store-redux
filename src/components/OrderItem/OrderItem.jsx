import {useDispatch} from 'react-redux';
import GameCover from '../GameCover/GameCover';
import './OrderItem.css'
import {deleteItemFromCart} from '../../redux/cart/reducer';

const OrderItem = ({game}) => {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(deleteItemFromCart(game.id))
	} 

	return (
		<div className='orderItem'>
			<div className="orderItem__cover">
				<GameCover image={game.image} onClick={handleClick}/>
			</div>
			<div className="orderItem__title">
				<span>
					{game.title}
				</span>
			</div>
			<div className="orderItem__price">
				<span>{game.price} руб.</span>
			</div>
		</div>
	);
};

export default OrderItem;