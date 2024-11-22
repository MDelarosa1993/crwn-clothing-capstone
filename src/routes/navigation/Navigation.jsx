import './Navigation.scss'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext';
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../../components/carticon/CartIcon';
import DropDownMenu from '../../components/dropdownmenu/DropDownMenu';
import { signOutUser } from "../../utilities/firebase/firebase.utilities";
const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)
	

  return (
    <>
      <div className="navigation">
				<Link className="logo-container" to='/'>
					<CrwnLogo className="logo"/>
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to='/shop'>
						SHOP
					</Link>
					{
						currentUser ? (
							<span className="nav-link" onClick={ signOutUser }>Sign Out</span>
						) : (
							<Link className="nav-link" to='/auth'>
								Sign In
							</Link>
						)}
						<CartIcon />
				</div>
				{isCartOpen && <DropDownMenu />}
      </div>
			<Outlet />
    </>
  )
}

export default Navigation;