import {useSelector} from 'react-redux';
import OrderItem from "../../components/OrderItem/OrderItem"
import './OrderPage.css'

const OrderPage = () => {
	const items = useSelector(state => state.cart.itemsInCart)

	if (items.length < 1) {
		return <h1>Ваша корзина пуста</h1>
	}

	return (
		<div className='orderPage'>
			<div className="orderPage__left">
				{items.map(game => (
					<OrderItem game={game} key={game.id} />
				))}
			</div>
		</div>
	);
};

export default OrderPage;