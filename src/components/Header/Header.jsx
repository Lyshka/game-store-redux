import {Link} from 'react-router-dom';
import './Header.css'
import CartBlock from '../CartBlock/CartBlock';

const Header = () => {
	return (
		<div className='header'>
			<div className="wrapper">
				<Link to="/" className='header__store-title'>
					LYSHKA STORE
				</Link>
			</div>
			<div className="wrapper header__cart-btn-wrapper">
				<CartBlock />
			</div>
		</div>
	);
};

export default Header;