import './dropdownmenu.scss'
import Button from '../button/Button'

const DropDownMenu = () => {
  return (
    <div className='cart-dropdown-container'>
			<div className='cart-items' />
			<Button>GO TO CHECKOUT</Button>
		</div>
  )
}

export default DropDownMenu;