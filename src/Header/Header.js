import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from "../firebase";

function Header() {
    const [{ basket , user }, dispatch] = useStateValue();
    console.log(basket)

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header__logo' src='https://scontent.fjrs8-1.fna.fbcdn.net/v/t1.15752-9/144237028_3672553869506887_8285588005337567732_n.png?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=cMg_G3EWhE8AX_V8_Ds&_nc_ht=scontent.fjrs8-1.fna&oh=b041ae0a93a59aba9d4f92d3b420bb69&oe=603C5036' />
            </Link>
            
       
            <div className='header__search'>
                <input className='header__searchInput' type='text' />
                <SearchIcon className='header__searchIcon'/>
            </div>

            <div className='header__nav'>
                <Link to = {!user && '/login'}>
                    <div onClick={ handleAuthenticaton} className='header__option'>
                    <span className='header__optionLineOne'> Hello {!user ? 'Guest' : user.email} </span>
                     <span className='header__optionLineTwo'> {user ? 'sign Out' : 'Sign In'} </span>
                </div>
               </Link>
               
                <div className='header__option'>
              
                    
                </div>
                 <Link to="/orders">
                <div className='header__option'>
                    <span className='header__optionLineOne'> Returns</span>
                    <span className='header__optionLineTwo'> & Orders </span>
                    </div>
                </Link>

                <div className='header__option'>
                    <span className='header__optionLineOne'> Your</span>
                    <span className='header__optionLineTwo'> Prime  </span>
                    
                </div>
                <Link to="/checkout">
                <div className='header__optionBascket'>
                    <ShoppingBasketIcon />
                        <span className='header__optionLineTwo header__basketCount'> {basket.length} </span>
                        {/* ? to handel the error */}
                </div>
                </Link>
            
                
            </div>
        </div>
    )
}

export default Header;