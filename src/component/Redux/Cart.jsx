// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { FaTrash } from 'react-icons/fa'

// import { decrementQuantity, deleteProduct, incrementQuantity } from './Action'

// const Cart = () => {

//     const [coupon, setCoupon] = useState("");
// const [discount, setDiscount] = useState(0);
// const [couponApplied, setCouponApplied] = useState(false);
//  let discountValue = 0;
// useEffect(() => {
//   localStorage.setItem("cart", JSON.stringify(data));
//   localStorage.setItem("coupon", JSON.stringify({ coupon, discount }));
// }, [data, coupon, discount]);
//   if (coupon === "SAVE10") {
//     discountValue = totalprice * 0.10; // 10% off
//   } else if (coupon === "FLAT500") {
//     discountValue = 500; // ₹500 off
//   } else {
//     alert("Invalid coupon code!");
//     setDiscount(0);
//     setCouponApplied(false);
//     return;
//   }



//   setDiscount(discountValue);
//   setCouponApplied(true);
//   alert("Coupon applied successfully!");
//     const data = useSelector((store) => store.myReducer)
//     console.log(data)
//     const dispatch = useDispatch()
//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(data))
//     }, [data])
//     const totalprice = data.reduce((acc, item) => {
//         const gstPercent = parseFloat(item.gstRate) / 100 || 0;
//         const baseTotal = item.price * item.quantity;
//         const gstAmount = baseTotal * gstPercent;
//         return acc + baseTotal + gstAmount;
//     }, 0);
//     return (

//         <div>
//             <h2 className="text-center bg-body-tertiary mt-5 p-5 mb-4">
//                 Your Shopping Cart
//             </h2>

//             <div className="container mt-5">
//                 <div className="table-responsive">
//                     <table className="table align-middle">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Product</th>
//                                 <th scope="col" style={{ width: "150px" }}>Quantity</th>
//                                 <th scope="col">GST Rate</th>
//                                 <th scope='col'>GST Amount</th>
//                                 <th scope="col">Final Price</th>
//                                 <th></th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             {data.map((el, i) => {
//                                 const gstPercent = parseFloat(el.gstRate) / 100 || 0;
//                                 const gstAmount = el.price * el.quantity * gstPercent;
//                                 const finalPrice = el.price * el.quantity + gstAmount;

//                                 return (
//                                     <tr key={el.id}>
//                                         <td className="d-flex align-items-center">
//                                             <img src={el.image} height="80" width="80" className="me-3" />
//                                             <div>
//                                                 <p className="mb-1"><strong>{el.vendor}</strong></p>
//                                                 <p className="mb-0">{el.name}</p>
//                                                 <small>Base Price: ₹{el.price}</small>
//                                             </div>
//                                         </td>

//                                         <td>
//                                             <div className="d-flex align-items-center">
//                                                 <button className="btn btn-outline-secondary" onClick={() => dispatch(decrementQuantity(i))} > - </button>

//                                                 <input type="text" className="form-control text-center mx-2" value={el.quantity} readOnly style={{ width: "60px" }} />

//                                                 <button className="btn btn-outline-secondary" onClick={() => dispatch(incrementQuantity(i))} > +  </button>

//                                                 <button className="btn btn-danger ms-3" onClick={() => dispatch(deleteProduct(i))} >
//                                                     <FaTrash />
//                                                 </button>
//                                             </div>
//                                         </td>
//                                         <td> {el.gstRate}</td>
//                                         <td>₹{gstAmount.toFixed(2)}</td>
//                                         <td>₹{finalPrice.toFixed(2)}</td>
//                                         <td></td>
//                                     </tr>
//                                 );
//                             })}
//                         </tbody>
//                     </table>
//                 </div>

//                 <div className="d-flex justify-content-between align-items-center mt-4">
//                     <div>
//                         <label htmlFor="specialInstructions" className="form-label fw-bold">
//                             Order special instructions
//                         </label>
//                         <textarea id="specialInstructions" className="form-control" rows="3" cols="32" placeholder="Add instructions..." ></textarea>
//                     </div>

//                     <div className="mb-3">
//                         <label htmlFor="coupon" className="form-label fw-bold">
//                             Have a Coupon?
//                         </label>
//                         <div className="d-flex">
//                             <input
//                                 type="text"
//                                 id="coupon"
//                                 className="form-control me-2"
//                                 placeholder="Enter coupon code"
//                                 value={coupon}
//                                 onChange={(e) => setCoupon(e.target.value.toUpperCase())}
//                                 style={{ maxWidth: "200px" }}
//                             />
//                             <button className="btn btn-primary" onClick={applyCoupon}>
//                                 Apply
//                             </button>
//                         </div>
//                     </div>

//                     <div className="text-end mb-5">
//   <h4>Subtotal (Incl. GST): <strong>₹{totalprice.toFixed(2)}</strong></h4>

//   {couponApplied && (
//     <>
//       <p>Discount: <strong className="text-success">-₹{discount.toFixed(2)}</strong></p>
//       <h4>Final Amount: <strong>₹{finalAmount.toFixed(2)}</strong></h4>
//     </>
//   )}

//   <small className="text-muted">
//     Taxes and shipping calculated at checkout
//   </small>
//   <br />
//   <button className="btn btn-danger px-5 mt-2">CHECK OUT</button>
// </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Cart

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { decrementQuantity, deleteProduct, incrementQuantity } from "./Action";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const data = useSelector((store) => store.myReducer);
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  
  const totalprice = data.reduce((acc, item) => {
    const gstPercent = parseFloat(item.gstRate) / 100 || 0;
    const baseTotal = item.price * item.quantity;
    const gstAmount = baseTotal * gstPercent;
    return acc + baseTotal + gstAmount;
  }, 0);

  const finalAmount = totalprice - discount;

  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(data));
    localStorage.setItem("coupon", JSON.stringify({ coupon, discount }));
  }, [data, coupon, discount]);

  
  const applyCoupon = () => {
    let discountValue = 0;

    if (coupon === "SAVE10") {
      discountValue = totalprice * 0.1;
    } else if (coupon === "FLAT500") {
      discountValue = 500;
    } else {
      alert("Invalid coupon code!");
      setDiscount(0);
      setCouponApplied(false);
      return;
    }

    setDiscount(discountValue);
    setCouponApplied(true);
    alert("Coupon applied successfully!");
  };

  return (
    <div>
      <h2 className="text-center bg-body-tertiary mt-5 p-5 mb-4">
        Your Shopping Cart
      </h2>

      <div className="container mt-5">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col" style={{ width: "150px" }}>Quantity</th>
                <th scope="col">GST Rate</th>
                <th scope="col">GST Amount</th>
                <th scope="col">Final Price</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data.map((el, i) => {
                const gstPercent = parseFloat(el.gstRate) / 100 || 0;
                const gstAmount = el.price * el.quantity * gstPercent;
                const finalPrice = el.price * el.quantity + gstAmount;

                return (
                  <tr key={el.id}>
                    <td className="d-flex align-items-center">
                      <img src={el.image} height="80" width="80" className="me-3" alt={el.name} />
                      <div>
                        <p className="mb-1"><strong>{el.vendor}</strong></p>
                        <p className="mb-0">{el.name}</p>
                        <small>Base Price: ₹{el.price}</small>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <button className="btn btn-outline-secondary" onClick={() => dispatch(decrementQuantity(i))}>
                          - </button>

                        <input type="text" className="form-control text-center mx-2"
                          value={el.quantity} readOnly style={{ width: "60px" }}/>

                        <button className="btn btn-outline-secondary"  onClick={() => dispatch(incrementQuantity(i))}>
                          +</button>

                        <button className="btn btn-danger ms-3" onClick={() => dispatch(deleteProduct(i))}>
                          <FaTrash />
                        </button>
                      </div>
                    </td>

                    <td>{el.gstRate}</td>
                    <td>₹{gstAmount.toFixed(2)}</td>
                    <td>₹{finalPrice.toFixed(2)}</td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-start mt-4 flex-wrap gap-4">
          <div>
            <label htmlFor="coupon" className="form-label fw-bold">
              Have a Coupon?
            </label>
            <div className="d-flex">
              <input type="text" id="coupon"  className="form-control me-2" placeholder="Enter coupon code"
                value={coupon} onChange={(e) => setCoupon(e.target.value.toUpperCase())} style={{ maxWidth: "200px" }} />
              <button className="btn btn-dark" onClick={applyCoupon}>Apply</button>
            </div>
          </div>

          <div className="text-end mb-5">
            <h4> Subtotal (Incl. GST): <strong>₹{totalprice.toFixed(2)}</strong> </h4>

            {couponApplied && (
              <>
                <p>
                  Discount:{" "} <strong className="text-success"> -₹{discount.toFixed(2)}  </strong>
                </p>
                <h4>
                  Final Amount: <strong>₹{finalAmount.toFixed(2)}</strong>
                </h4>
              </>
            )}

            <small className="text-muted">
              Taxes and shipping calculated at checkout
            </small>
            <br />
            <button className="btn btn-danger px-5 mt-2" onClick={()=>navigate('/checkout')}>CHECK OUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
