import React, {useState, useEffect} from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helemt from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/product-details.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

const FoodDetails =() => {
    
const [ tab,setTab] = useState('desc');
const [enteredName, setEnteredName] = useState('');
const [enteredEmail,setEneteredEmail] = useState('')
const {id} = useParams();
const dispatch = useDispatch()

    const product = products.find(product => product.id === id);
    const [ previewImg, setPreviewImg ] = useState(product.image01);
    const {title, price, category, desc, image01} = product

const addItem = ()=> {
    dispatch(cartActions.addItem({
        id,
        title,
        price,
        image01
    })
    );
};
const submitHandler = (e) =>{
  e.preventdefault();

  console.log(enteredName, enteredEmail)
};

useEffect(()=>{
    setPreviewImg(product.image01)
}, [product]);

useEffect(()=>{
    window.scrollTo(0,0)
},[product])



    return (
        <Helemt title='Product-details'>
            <CommonSection title={title}/>

            <section>
           <Container>
            <Row>
              <Col lg='2' md='2'>
                  <div className="product_images">
                      <div className="img_item mb-3" 
                      onClick={()=>setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" className='w-50'/>
                      </div>

                      <div className="img_item mb-3"
                      onClick={()=>setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" className='w-50'/>
                      </div>

                      <div className="img_item mb-3"
                      onClick={()=>setPreviewImg(product.image03)}>
                        <img src={product.image03} alt="" className='w-50'/>
                      </div>

                  </div>
              </Col>

              <Col lg='3' md='3'>
                <div className="product_main-img">
                     <img src={previewImg} alt="" className='w-100'/>
                </div>
              </Col>

              <Col lg='6' md='6'>
              <div className="single_product-content">
                <h2 className='product_title mb-3'>{title}</h2>
                <p className='product_price'>
                    {' '}
                    Price: <span>{price}</span>
                </p>
                <p className='category mb-5'>Category: <span>{category}</span></p>
                <button onClick={addItem} className='addToCart_btn'>Add to Cart</button>
              </div>
              </Col>

              <Col lg='12'>
              <div className='tabs d-flex align-items-center gap-5 py-2'>
              <h6 className={' ${tab ==="desc" ? "tab_active" : " "}'} onClick={()=> setTab('desc')}>
                Description
            </h6>
              
            <h6 className={' ${tab ==="rev" ? "tab_active" : " "}'} 
            onClick={()=> setTab('rev')}>
                Review
            </h6>
              </div>
{
    tab === 'desc' ? <div className="tab_content">
    <p>{desc}</p>
  </div> :<div className='tab_form mb-3'>
                <div className='review'>
                    <p className='user_name mb-0'>Mona Roy</p>
                    <p className='user_email'>mona1@gmail.com</p>
                    <p className='feedback_text'>Its yummyyy...tastyy</p>
                </div>
              </div>
}  <hr/>
                <div className='tab_form mb-3'>
                <div className='review'>
                    <p className='user_name mb-0'>Rahul Kerba</p>
                    <p className='user_email'>rahul21@gmail.com</p>
                    <p className='feedback_text'>good food</p>
                </div>
              </div>
<hr/>
              <div className='tab_form mb-3'>
                <div className='review'>
                    <p className='user_name mb-0'>Kenia Doe</p>
                    <p className='user_email'>kenia02@gmail.com</p>
                    <p className='feedback_text'>Nice taste</p>
                </div>
              </div>

              </Col>

           </Row>
           </Container>
            </section>
        </Helemt>
    )
}

export default FoodDetails;