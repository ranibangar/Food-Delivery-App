import React from 'react';
import { ListGroup } from 'reactstrap';
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const CartItem = ({item})=> {
    const {id, title, price, image01, quantity, totalPrice} = item;

    const dispatch = useDispatch();

    const incrementItem = ()=>{
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        })
        );
    };

    const decreaseItem = ()=>{
        dispatch(cartActions.removeItem(id))
    };

    const deleteItem = ()=>{
        dispatch(cartActions.deleteItem())
    }
    
    return(
    <ListGroup className='border-0 cart_item'>
   <div className="cart_item-info d-flex gap-2">
    <img src={image01} alt="products-img"/>

    <div className="cart_product-info d-flex align-items-center 
    justify-content-between w-100">
        <div>
        <h6 className='cart_product-title'>{title}</h6>
        <p className='d-flex align-items-center gap-5 cart_product-price'>
            {quantity}* <span>${totalPrice}</span>
        </p>
        <div className='d-flex align-items-center justify-content-between increase_decrease-btn'>
            <span className='increase-btn' onClick={incrementItem}><i class="ri-add-line"></i></span>
            <span className='quantity'>{quantity}</span>
            <span className='decrease-btn' onClick={decreaseItem}><i class="ri-subtract-line"></i></span>
        </div>
        </div>

        <span className='delete_btn' onClick={deleteItem}>
            <i class="ri-close-line"></i>
        </span>
    </div>
   </div>
    </ListGroup>
    )
}

export default CartItem;