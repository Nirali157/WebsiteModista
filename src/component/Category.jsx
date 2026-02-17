
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Category() {
  const [product, setPoduct] = useState([])
  const { category } = useParams()
  useEffect(() => {
    fetchApi()
  }, [])

  const fetchApi = async () => {
    const info = await axios.get(`http://localhost:3000/${category}`)
    console.log(info.data)
    setPoduct(info.data)
  }
  return (
    <div className="container py-4" data-aos='fade-up'>
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
      
                  `}
      </style>

      <h1 className="text-center mb-4">Products</h1>
      <div className="row g-4">
        {product.map((el, i) => (
          <div key={i} className="col-md-3 col-sm-6">
            <div className="product-wrapper">
              <div className="product-card text-center">

                <div className="image-container">
                  <Link to={`/${el.category}/${el.id}`} className="d-block text-center">
                    <img src={el.image} alt={el.name} style={{width: "100%", height: "350px", 
                      objectFit: "contain",background: "#f8f8f8", padding: "20px" }} />
                  </Link>

                </div>

                <div className="text-start mt-2">
                  <h6 className="text-uppercase text-muted">{el.vendor}</h6>
                  <p style={{ fontSize: "14px",minHeight: "40px",margin: "5px 0" }} >
                    {el.name}
                  </p>
                  <div className="text-warning small mb-2">★★★★★</div>
                  <div>
                    <span className="fw-bold text-danger">₹ {el.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
