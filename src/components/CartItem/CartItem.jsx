import './CartItem.css'

const CardItem = ({title, price, id}) => {
	return (
		<div className='cartItem'>
			<span>{title}</span>
			<div className="cartItem__price">
				<span>{price} руб.</span>
			</div>
		</div>
	);
};

export default CardItem;