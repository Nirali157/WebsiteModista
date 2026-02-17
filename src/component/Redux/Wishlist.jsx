import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myAction, removeWishlist } from "./Action";
import { useNavigate, Link } from "react-router-dom";

export default function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const nav = useNavigate();

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    const handleCart = (item) => {
        dispatch(myAction(item));
        nav("/cart");
    };

    return (
        <div className="mt-4">
            <div style={{ backgroundColor: "#f6f6f6", padding: "30px 0", textAlign: "center" }} >
                <h2 className="fw-bold mb-2">Wishlist</h2>
                <p className="text-muted">
                    <Link to="/" className="text-decoration-none text-muted">  Home </Link>/ Wishlist  </p>
            </div>

            <div className="container my-5">
                {wishlist.length === 0 ? (
                    <p className="text-center text-muted fs-5">No items in wishlist</p>
                ) : (
                    <div className="row justify-content-center g-4 ">
                        {wishlist.map((item) => (
                            <div key={item.id} className="col-lg-3 col-md-4 col-sm-6" >
                                <div className="position-relative text-center" >
                                    <button className="position-absolute top-0 end-0 border-0 bg-transparent fs-5"
                                        onClick={() => dispatch(removeWishlist(item.id))} >
                                        ✕
                                    </button>

                                    <img src={item.image} alt={item.name} style={{
                                        width: "100%", height: "280px",
                                        objectFit: "contain", backgroundColor: "#f8f8f8"
                                    }} />

                                    <div className="mt-3 text-start">
                                        <p className="text-uppercase text-muted mb-1" style={{
                                            fontSize: "13px",
                                            letterSpacing: "0.5px"
                                        }}>  {item.vendor || item.brand || "BRAND"}
                                        </p>

                                        <p className="fw-semibold " style={{ fontSize: "15px", minHeight: "40px",
                                            margin: "5px 0" }}>
                                            {item.name}
                                        </p>

                                        <div className="mb-3">
                                            {item.oldPrice && (
                                                <span className="text-muted text-decoration-line-through me-2">
                                                    ₹{item.oldPrice}
                                                </span>
                                            )}
                                            <span className="text-danger fw-bold">₹{item.price}</span>
                                        </div>

                                        <button className="btn btn-danger text-uppercase px-4 py-2"
                                            style={{ fontSize: "13px", borderRadius: "0", letterSpacing: "0.5px" }}
                                            onClick={() => handleCart(item)} >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
