import React, {useState, useEffect} from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, ListInlineItem } from "reactstrap"
import heroImg from "../assets/images/hero.png";
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products';
import foodCategory01 from '../assets/images/hamburger.png';
import foodCategory02 from '../assets/images/pizza.png';
import foodCategory03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard';

const featureData = [
    {
        title:'Quick Delivery',
        imgUrl: featureImg01,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloribus.',
    },
    {
        title:'Super Dine In',
        imgUrl: featureImg02,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloribus.',
    },
    {
        title:'Easy Pick Up',
        imgUrl: featureImg03,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, doloribus.',
    }

]
const Home =() => {
    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        const filteredPizza = products.filter((item) => item.category === "Pizza");
      }, []);
    
    useEffect(() => {
        if (category === "ALL") {
          setAllProducts(products);
        }
    
        if (category === "BURGER") {
          const filteredProducts = products.filter(
            (item) => item.category === "Burger"
          );
    
          setAllProducts(filteredProducts);
        }
    
        if (category === "PIZZA") {
          const filteredProducts = products.filter(
            (item) => item.category === "Pizza"
          );
    
          setAllProducts(filteredProducts);
        }
    
        if (category === "BREAD") {
          const filteredProducts = products.filter(
            (item) => item.category === "Bread"
          );
    
          setAllProducts(filteredProducts);
        }
      }, [category]);

    return<Helmet title="Home">
<section>
    <Container>
        <Row>
            <Col lg='6' md='6'>
                <div className='hero_content'>
                     <h5 className='mb-3'>Easy way to make an order</h5>
                     <h1 className='mb-4 hero_title'><span>HUNGRY?</span> Just wait <br/> food at <span> your door </span></h1>
                     
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, delectus. Quisquam, est illum. Ad, ratione.</p>

                 <div className="hero_btns d-flex align-items-center gap-5 mt-5">
                    
                    <button className='order_btn d-flex align-items-center justfy-content-between'>Order Now
                    <i class="ri-arrow-right-s-line"></i>                
                    </button>
                   
                    <button className='all_foods-btn'>
                        <Link  to='/foods'> See All Foods</Link>
                    </button>
                 </div>
                 <div className='hero_service d-flex align-items-center gap-5 mt-5'>
                    <p className='d-flex align-items-center gap-2'>
                    <span className='shipping_icon'>
                    <i class="ri-roadster-line"></i>
                    </span>{" "}No Shipping Charge</p>

                    <p className='d-flex align-items-center gap-2'>
                    <span className='shipping_icon'>
                    <i class="ri-shield-check-fill"></i>
                    </span>{" "}100% Secure Checkout</p>
                
                 </div>
                </div>
            </Col>
            
            <Col lg='6' md='6'>
            <div className='hero_img'>
                <img src={heroImg} alt="hero_image" className='w-100'/>
            </div>
            </Col>
        </Row>
    </Container>
</section>

<section className='pt-0'>
  <Category/>
</section>

<section>
    <Container>
        <Row>
            <Col lg='12' className='text-center'>
                <h5 className='feature_subtitle mb-4'>What We Serve</h5>
                <h2 className='feature_title'>Just sit back at home</h2>
                <h2 className='feature_title'>we will <span>take care </span></h2>  

                <p className='mb-1 mt-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quia.</p>  

                <p className='mb-4 feature_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, hic! {" "}</p>    
            </Col>

            {
              featureData.map((item,index)=>(
                <Col lg='4'md='6' sm='6' key={index} className='mt-5'>
                <div className="feature_item text-center p-3">
                     <img 
                     src={item.imgUrl} 
                     alt='feature-img' 
                     className='w-25 mb-3'
                     />
                     <h5 className='fw-bold mb-3'>{item.title}</h5>
                     <p>{item.desc}</p>
                </div>
            </Col>
              ))
            }

            

        </Row>
    </Container>
    </section>

    <section>
        <Container>
            <Row>
                <Col lg='12' className='text-center'>
                <h2>Popular Foods</h2>
                </Col>

                 <Col lg='12 mb-5'>
                   <div className="food_category d-flex align-item-center justify-content-center gap-4">
                    
                    <button className={`all__btn  ${
                    Category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={()=>setCategory("ALL")}
                  >All</button>
                    
                    <button className='d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  } `}' 
                  onClick={() => setCategory("BURGER")}>
                    <img src={foodCategory01} alt=''/>
                    Burger
                    </button>
                    

                    <button className='d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  } `}'
                  onClick={() => setCategory("PIZZA")}>
                    <img src={foodCategory02} alt=''/>
                     Pizza
                     </button>
                    

                     <button className='d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}'
                  onClick={() => setCategory("BREAD")}>
                     <img src={foodCategory03} alt=''/>
                     Bread
                     </button>

                    </div>                   
                 </Col>

                 {
                   allProducts.map(item=>(
                    <Col lg='3' md='4' key={item.id} className='mt-5'>
                    
                    <ProductCard item={item}/>
                    </Col>
                   ))
                 }
            </Row>
        </Container>
    </section>

    <section>

    </section>
    </Helmet>      
};

export default Home;