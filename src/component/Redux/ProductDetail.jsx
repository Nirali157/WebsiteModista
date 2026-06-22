import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { myAction } from './Action'

export default function ProductDetail() {
  const [state, setState] = useState({})
  const { category, id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchApi = async () => {
    // const info = await axios.get(`http://localhost:3000/${category}/${id}`)
    // setState(info.data)
    const info = await axios.get("/db.json");

const product = info.data.products.find(
  (item) => item.id.toString() === id
);

setState(product);
  }
    fetchApi()
  }, [category, id])

  const { isAuthenticated } = useSelector((s) => s.auth);

  // const fetchApi = async () => {
  //   const info = await axios.get(`http://localhost:3000/${category}/${id}`)
  //   setState(info.data)
  // }

  function AddToCart() {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      navigate("/login");
      return;
    }
    dispatch(myAction(state))
    navigate("/Cart")
  }

  return (
    <div>
      <div className="container mt-5" data-aos='fade-up'>
        <div className="row">

          {/* Product Image */}
          {/* <div className="col-md-5">
            <div className="card mb-5">
              <img src={state.image} className="card-img-top" alt={state.name} />
            </div>
          </div> */}
          {/* Product Image */}
          <div className="col-md-5">
            <div className="card mb-5 overflow-hidden" style={{ position: 'relative', cursor: 'zoom-in' }}>
              <div className="zoom-container"  style={{ width: '100%',  height: '100%',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  e.currentTarget.querySelector('img').style.transformOrigin = `${x}% ${y}%`;
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                }} >
                <img src={state.image}  className="card-img-top" alt={state.name}
                  style={{
                    transition: 'transform 0.3s ease',
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }} />
              </div>
            </div>
          </div>


          {/* Product Details */}
          <div className="col-md-7">
            <h3>{state.name}</h3>
            <h4 className="text-danger">₹ {state.price}</h4>

            <p>{state.description || "Description not available"}</p>

            <button className="btn btn-danger me-2 px-5 " onClick={AddToCart}>Add to Cart</button>
            <button className="btn btn-outline-secondary px-5 text-dark" onClick={AddToCart}>Buy It Now</button>

            <hr />

            <p><strong>Category:</strong> {category}</p>
            <p><strong>Vendor:</strong> {state.vendor}</p>

            <p><strong>Tags:</strong> {state.tags ? state.tags.split(' ').join(', ') : 'No tags available'}</p>

            <div className="accordion mt-4" id="productInfoAccordion">

              <div className="accordion-item">
                <h2 className="accordion-header" id="shippingHeading">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#shipping" aria-expanded="false" aria-controls="shipping">
                    Shipping & Returns
                  </button>
                </h2>
                <div id="shipping" className="accordion-collapse collapse" aria-labelledby="shippingHeading" data-bs-parent="#productInfoAccordion">
                  <div className="accordion-body">
                    Free shipping and returns available on all orders! We ship all US domestic orders within 5-10 business days.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="materialsHeading">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#materials" aria-expanded="false" aria-controls="materials">
                    Materials
                  </button>
                </h2>
                <div id="materials" className="accordion-collapse collapse" aria-labelledby="materialsHeading" data-bs-parent="#productInfoAccordion">
                  <div className="accordion-body">
                    Made with sustainable materials. Combining sustainability with style.
                  </div>
                </div>

              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="careInstructionsHeading">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#careInstructions" aria-expanded="false" aria-controls="careInstructions">
                    Care Instructions
                  </button>
                </h2>
                <div id="careInstructions" className="accordion-collapse collapse" aria-labelledby="careInstructionsHeading" data-bs-parent="#productInfoAccordion">
                  <div className="accordion-body">
                    Routinely dust items with a gentle cleanser and use a mild detergent solution when needed.
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  )
}
