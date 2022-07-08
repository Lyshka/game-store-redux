import './CartBlock.css'
import {BiCartAlt} from "react-icons/bi"
import {useSelector} from 'react-redux';
import CartMenu from "../CartMenu/CartMenu"
import {calcTotalPrice} from '../utils';
import {useState} from 'react';
import ItemsInCart from "../ItemsInCart/ItemsInCart"

const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)

	return (
		<div className="cartBlock">
			<ItemsInCart quantity={items.length} />
			<BiCartAlt size={25} className="cartBlock__icon"  onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
			{totalPrice ? <span className='cartBlock__total-price'>{totalPrice} руб.</span> : null}
			{isCartMenuVisible && <CartMenu items={items} onClick={() => {}} />}
		</div>
	);
};

export default CartBlock;