import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col} from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import '../styles/checkout.css';


const Checkout = () => {

    const [enterName,setEnterName] = useState(' ');
    const [enterEmail, setEnterEmail] = useState(' ');
    const [enterNumber, setEnterNumber] = useState(' ');
    const [enterCountry, setEnterCountry] = useState(' ');
    const [enterCity, setEnterCity] = useState(' ');
    const [postalCode, setEnterPostalCode] = useState(' ');

    const shippingInfo = []
    const cartTotalAmount = useSelector(state=> state.cart.TotalAmount)
    const shippingCost = 30;

const TotalAmount = cartTotalAmount + Number(shippingCost);

 const submitHandler = e=>{
    e.preventDefault()
    const userShippingAddress = {
        name: enterName,
        email: enterEmail,
        phone: enterNumber,
        country: enterCountry,
        city: enterCity,
        postalCode: postalCode,

    };
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo);
 };

    return <Helmet>
        <CommonSection/>
            <Container>
                <Row>
                    <Col lg='8' md='6'>
                        <h3 className='my-4'>Shipping Address</h3>
                       <form className='checkout_form' onSubmit={submitHandler}>
                           <div className="form_group mb-3">
                            <input type='text' placeholder='Enter your name' 
                            required onChange={e=> setEnterName(e.target.value)}/>
                           </div>

                           <div className="form_group mb-3">
                            <input type='email' placeholder='Enter your email'
                            required onChange={e=> setEnterEmail(e.target.value)} />
                           </div>

                           <div className="form_group mb-3">
                            <input type='number' placeholder='Phone number' 
                            required onChange={e=> setEnterNumber(e.target.value)}/>
                           </div>

                           <div className="form_group mb-3">
                            <input type='text' placeholder='Country' 
                            required onChange={e=> setEnterCountry(e.target.value)}/>
                           </div>

                           <div className="form_group mb-3">
                            <input type='text' placeholder='Enter city name' 
                            required onChange={e=> setEnterCity(e.target.value)}/>
                           </div>

                           <div className="form-group mb-3">
                            <input type='number' placeholder='Postal code'
                            required onChange={e=> setEnterPostalCode(e.target.value)} />
                           </div>
                           <button className='addToCart_btn mb-3'>Payment</button>
                       </form>
                       
                    </Col>
                    <Col lg='4' md='6' className='mt-5'>
                        <div className='checkout_bill'>
                            <h6 className='d-flex align-items-center 
                            justify-content-between mb-3'>
                                Subtotal: <span>${cartTotalAmount}</span>
                            </h6>
                             <h6 className='d-flex align-items-center 
                             justify-content-between mb-3'>
                                Shipping: <span>${shippingCost}</span>
                            </h6>
                       <div className='checkout_total'>
                        <h5 className='d-flex align-items-center 
                        justify-content-between mt-3'>Total: <span>${TotalAmount}</span></h5>
                       </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    </Helmet>
    
};

export default Checkout;