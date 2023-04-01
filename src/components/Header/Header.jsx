import React,{useRef} from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png'
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

const nav_links =[
    {
        display: 'Home',
        path:'/home'
    },
    {
        display: 'Foods',
        path:'/foods'
    },
    {
        display: 'Cart',
        path:'/cart'
    },
    {
        display: 'Contact',
        path:'/contact'
    },
    
]
const Header =() => {
  
    const menuRef = useRef(null)
    const totalQuantity = useSelector(state=> state.cart.totalQuantity);
    const dispatch = useDispatch()


    const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

const toggleCart =()=>{
    dispatch(cartUiActions.toggle())
}

    return(
<header className='header'>
<Container>
    <div className="nav_wrapper d-flex align-item-center 
    justify-content-between">
        <div className='logo'>
            <img src={logo} alt="logo" />
            <h6>Tasty Treat</h6>
        </div>
{/* menu */}
<div className='navigation' ref={menuRef} onclick={toggleMenu}>
<div className="menu d-flex align-item-center gap-5">

    {
        nav_links.map((item,index)=>(
            <NavLink 
            to={item.path} 
            key={index} 
            className={navClass=>navClass.isActive ? 'active_menu' : ''}
        >
            {item.display}
            </NavLink>
        ))
    }
</div>
</div>

{/* nav right icons */}
<div className="nav_right d-flex align-item-center gap-4">
    <span className="cart_icon" onclick={toggleCart}>
    <i class="ri-shopping-cart-fill"></i>        
    <span className="cart_badge">{totalQuantity}</span>
    </span>
    
    <span className="user">
        <Link to='/login'>
            <i class="ri-user-3-fill"></i>
        </Link>
    </span>
    
<span className="mobile_menu" onclick={toggleMenu}>
<i class="ri-menu-line"></i> 
</span>    
</div>
    </div>
</Container>

</header>
        )
}

export default Header;