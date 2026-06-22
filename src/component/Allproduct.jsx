
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart, FaLayerGroup } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addWishlist, myAction } from "./Redux/Action";
export default function Allproduct() {
    const [product, setPoduct] = useState([])
    const [visibleCount, setVisibleCount] = useState(8)

  const { isAuthenticated } = useSelector((s) => s.auth);
    
  const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        fetchApi()
    }, [])

    const fetchApi = async () => {
        // const info = await axios.get("http://localhost:3000/products")
        // setPoduct(info.data)
        const info = await axios.get("/db.json")
setPoduct(info.data.products)
        console.log(info.data)
    }

    const dispatch = useDispatch();

    function handleWishlist(el) {
        dispatch(addWishlist(el));
        alert("Added to wishlist ❤️");
    }

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4)
    }

    function AddToCart(el) {
        if (!isAuthenticated) {
          alert("Please login to add items to cart");
          navigate("/login");
          return;
        }
        dispatch(myAction(el))
        navigate("/Cart")
      }
    return (
        <div className="container py-4">
            <style>
                {`
            .product-wrapper {
                position: relative;
                padding: 10px;
                transition: all 0.3s ease;
            }
            .product-card {
                background: #fff;
                padding: 10px;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            .product-wrapper:hover .product-card {
                box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
            }

            .image-container {
                position: relative;
                overflow: hidden;
            }

            .add-cart-btn {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                background: rgba(211, 47, 47, 0.95);
                color: #fff;
                border: none;
                padding: 12px 0;
                margin-bottom:15px;
                font-size: 14px;
                font-weight: bold;
                opacity: 0;
                transform: translateY(100%);
                transition: all 0.4s ease;
                z-index: 2;
            }
            .product-wrapper:hover .add-cart-btn {
                opacity: 1;
                transform: translateY(0);
            }

            .action-icons {
                position: absolute;
                top: 15px;
                right: 15px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                opacity: 0;
                visibility: hidden;
                transform: translateX(20px);
                transition: all 0.3s ease;
                z-index: 3;
            }
            .product-wrapper:hover .action-icons {
                opacity: 1;
                visibility: visible;
                transform: translateX(0); 
            }

            .icon-btn {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 50%;
                width: 34px;
                height: 34px;
                font-size: 18px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .icon-btn:hover {
                background: #d32f2f;
                color: #fff;
                border-color: #d32f2f;
            }
            .load-more-btn {
            display: block;
            margin: 30px auto 0;
            padding: 10px 25px;
            background-color: #d32f2f;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
         }
        .load-more-btn:hover {
            background-color: #d32f2f;
        }
            `}
            </style>

            <h1 className="text-center mb-4">Products</h1>

            <div className="row g-4">
                {product.slice(0, visibleCount).map((el, i) => (
                    <div key={i} className="col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay={i * 100}>
                        <div className="product-wrapper">
                            <div className="product-card text-center">
                                <div className="action-icons">
                                    <button className="icon-btn" onClick={() => handleWishlist(el)}>
                                        <FaHeart />
                                    </button>
                                    <button className="icon-btn">
                                        <FaLayerGroup />
                                    </button>
                                </div>

                                <div className="image-container">
                                    <Link to={`/${el.category}`} className="d-block text-center">
                                        <img src={el.image} alt={el.name} style={{
                                            width: "100%",
                                            height: "350px", objectFit: "contain"
                                        }} />
                                    </Link>
                                    <button className="add-cart-btn" onClick={()=>AddToCart(el)}>ADD TO CART</button>
                                </div>

                                <div className="text-start mt-2">
                                    <h6 className="text-uppercase text-muted">{el.vendor}</h6>
                                    <p style={{ fontSize: "14px", minHeight: "40px", margin: "5px 0" }} >
                                        {el.name}
                                    </p>
                                    <div className="text-warning small mb-2">★★★★★</div>
                                    <div>
                                        <span className="text-muted text-decoration-line-through me-2">
                                            {el.oldPrice}
                                        </span>
                                        <span className="fw-bold text-danger">₹ {el.price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < product.length && (
                <button className="load-more-btn" onClick={handleLoadMore}>
                    View More
                </button>
            )}
        </div>


    )
}
