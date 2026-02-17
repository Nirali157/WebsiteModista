import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { myReducer: cart } = useSelector((state) => state);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "cod",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const total = cart.reduce((acc, item) => {
        const gstPercent = parseFloat(item.gstRate) / 100 || 0;
        const gstAmount = item.price * item.quantity * gstPercent;
        return acc + item.price * item.quantity + gstAmount;
    }, 0);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.paymentMethod === "online") {
            if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
                alert("⚠️ Please fill all card details!");
                return;
            }
        }

        alert("✅ Order placed successfully!");
        navigate("/");
    };

    return (
        <div className="container mt-5 mb-5" data-aos='fade-up'>
            <h2 className="text-center mb-4 fw-bold">Checkout</h2>
            <div className="row g-4">

                <div className="col-md-7">
                    <div className="card shadow-sm p-4 border-0 rounded-4">
                        <h5 className="mb-3 fw-semibold">Shipping Details</h5>
                        <form onSubmit={handleSubmit}>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" name="name" className="form-control" required
                                        value={formData.name} onChange={handleChange}/>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control"
                                        required value={formData.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Phone</label>
                                <input type="text" name="phone"  className="form-control" required
                                    value={formData.phone} onChange={handleChange} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Address</label>
                                <textarea name="address"  rows="3" className="form-control" required
                                    value={formData.address} onChange={handleChange}></textarea>
                            </div>

                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" name="city" className="form-control" required
                                        value={formData.city}  onChange={handleChange}  />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">State</label>
                                    <input type="text" name="state" className="form-control" required
                                        value={formData.state} onChange={handleChange} />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label className="form-label">Pincode</label>
                                    <input type="text"  name="pincode"  className="form-control" required
                                        value={formData.pincode} onChange={handleChange} />
                                </div>
                            </div>


                            <h5 className="mt-4 mb-3 fw-semibold">Payment Method</h5>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="paymentMethod" value="cod"
                                 checked={formData.paymentMethod === "cod"} onChange={handleChange} />
                                <label className="form-check-label">Cash on Delivery</label>
                            </div>

                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio"name="paymentMethod"
                                    value="online"checked={formData.paymentMethod === "online"}
                                    onChange={handleChange} />
                                <label className="form-check-label">Credit / Debit Card</label>
                            </div>


                            {formData.paymentMethod === "online" && (
                                <div className="card shadow-sm p-3 mb-3 border rounded-3">
                                    <h6 className="fw-semibold mb-3">Enter Card Details</h6>
                                    <div className="mb-3">
                                        <label className="form-label">Card Number</label>
                                        <input type="text" name="cardNumber" className="form-control"
                                            placeholder="1234 5678 9012 3456"  maxLength="16"
                                            value={formData.cardNumber} onChange={handleChange} required />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Expiry Date</label>
                                            <input type="text" name="expiry" className="form-control"
                                                placeholder="MM/YY" value={formData.expiry}
                                                onChange={handleChange} required/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">CVV</label>
                                            <input type="password" name="cvv" className="form-control"
                                                maxLength="3" placeholder="***" value={formData.cvv}
                                                onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="btn btn-danger mt-3 w-100 py-2 fw-semibold">
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>


                <div className="col-md-5">
                    <div className="card shadow-sm p-4 border-0 rounded-4">
                        <h5 className="mb-3 fw-semibold">Order Summary</h5>
                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <ul className="list-group list-group-flush">
                                {cart.map((item) => (
                                    <li
                                        key={item.id}
                                        className="list-group-item d-flex justify-content-between align-items-center"
                                    >
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={item.image} alt={item.name} height={80}
                                                width={80} className="rounded" />
                                            <div>
                                                <strong>{item.name}</strong>
                                                <br />
                                                <small>Qty: {item.quantity || 1}</small>
                                            </div>
                                        </div>
                                        <span>₹{item.price * (item.quantity || 1)}</span>
                                    </li>
                                ))}
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Subtotal:</strong>
                                    <span>₹{total.toFixed(2)}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Shipping:</strong>
                                    <span>₹50</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <strong>Total:</strong>
                                    <span>₹{(total + 50).toFixed(2)}</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
