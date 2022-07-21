import './CartBlock.css'
import {BiCartAlt} from "react-icons/bi"
import {useSelector} from 'react-redux';
import CartMenu from "../CartMenu/CartMenu"
import {calcTotalPrice} from '../utils';
import {useCallback} from 'react';
import ItemsInCart from "../ItemsInCart/ItemsInCart"
import {useNavigate} from 'react-router-dom';
import {useOutSide} from "../Hooks/useOutSide"

const CartBlock = () => {
	const {ref, isShow, setIsShow} = useOutSide()
	const items = useSelector(state => state.cart.itemsInCart)
	const totalPrice = calcTotalPrice(items)
	const navigate = useNavigate()

	const handleClick = useCallback(() => {
		setIsShow(false)
		navigate('/order')
	}, [navigate, setIsShow])

	return (
		<div className="cartBlock" ref={ref}>
			<ItemsInCart quantity={items.length} />
			<BiCartAlt size={25} className="cartBlock__icon" onClick={() => setIsShow(!isShow)}/>
			{totalPrice ? <span className='cartBlock__total-price'>{totalPrice} руб.</span> : null}
			{isShow && <CartMenu items={items} onClick={handleClick} />}
		</div>
	);
};

export default CartBlock;