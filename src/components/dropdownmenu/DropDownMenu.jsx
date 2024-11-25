import './dropdownmenu.scss'
import Button from '../button/Button'
import CartItem from '../cartitem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const DropDownMenu = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}

  return (
    <div className='cart-dropdown-container'>
			<div className='cart-items'>
				{ cartItems.map(item => <CartItem key={ item.id }cartItem={item} />) }
			</div>
			<Button onClick={ goToCheckoutHandler }>GO TO CHECKOUT</Button>
		</div>
  )
}

export default DropDownMenu;