import React from 'react';
import { Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
import { Link } from 'react-router-dom';



const Footer =() => {
    return(
        <footer className='footer'>
<Container>
    <Row>
        <Col lg='3' md='4' sm='6'>
        <div className='logo footer_logo text-start'>
            <img src={logo} alt="logo" />
            <h6>Tasty Treat</h6>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur unde nulla, perspiciatis voluptatem
            </p>
        </div>
        </Col>
       
        <Col lg='3' md='4' sm='6'>
            <h4 className='footer_title'>Delivery Time</h4>
            <ListGroup className='delivery_time-list'>
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
               <span>Sunday - Thursday</span>
               <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
                </ListGroupItem>
            </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h4 className='footer_title'>Contact</h4>
            <ListGroup className='delivery_time-list'>
            
            <ListGroupItem className='delivery_time-item border-0 ps-0'>
            <p> Location: Murband,Dist-Thane Maharashtra 421601</p>            
            </ListGroupItem>
                
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
               <span>Phone: 7066789548</span>
                </ListGroupItem>
               
                <ListGroupItem className='delivery_time-item border-0 ps-0'>
                <span>Email: ranibangar97@gmail.com</span>
                </ListGroupItem>
            </ListGroup>
        </Col>
        <Col lg='3' md='4' sm='6'>
        <h4 className='footer_title'>Newsletter</h4>
         <p>Subscribe Our Newsletter</p>
         <div className="newsletter">
            <input type="email" placeholder='Enter your email here..'/>
            <span><i class="ri-send-plane-fill"></i></span>
         </div>
        </Col>
    </Row>

    <Row className='mt-5'>
        <Col lg='6' md='6'>
            <p className='copyright_text'>Copyright - 2023 website made by Rani Bangar.
                All Rights Reserved</p>
        </Col>
        <Col lg='6' md='6'>
            <div className="social_links d-flex align-item-center gap-4 justify-content-end">
                <p className='m-0'>Follow:</p>
                <span>
                    <Link to='https://www.facebook.com/'>
                        <i class="ri-facebook-circle-fill"></i>
                    </Link>
                </span>
                <span>
                    <Link to='https://github.com/ranibangar'>
                        <i class="ri-git-branch-line"></i>
                    </Link>
                </span>
                <span>
                    <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'>
                    <i class="ri-twitter-fill"></i>
                    </Link>
                </span>
            </div>
        </Col>

    </Row>
</Container>
</footer>
        )
}

export default Footer;