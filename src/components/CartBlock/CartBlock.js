import './CartBlock.css'
import {BiCartAlt} from "react-icons/bi"

const CartBlock = () => {
	return (
		<div className="cartBlock">
			<BiCartAlt size={25} className="cartBlock__icon" />
			<span className='cartBlock__total-price'>2313 руб.</span>
		</div>
	);
};

export default CartBlock;