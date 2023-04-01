import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/product-card.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const Productcard =(props) => {

    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch()

     const addToCart = ()=>{
        dispatch
        (cartActions.addItem({
            id,
            title,
            image01,
            price
        })
        );
     };

    
    return(
        <div className='product_item'>
            <div className="product_img">
                <img src={image01} alt='product-img'className='w-50'/>
            </div>

            <div className="product_content">
                <h6><Link to={`/foods/${id}`}>{title}</Link></h6>
                <div>
                    <div className='d-flex align-items-center justify-content-between'>
                    <span className='product_price'>${price}</span>
                    <button className='addToCart_btn' onClick={addToCart}>
                        Add To Cart
                     </button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Productcard;





