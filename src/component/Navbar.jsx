// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "./Redux/AuthAction";
// import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
// import axios from "axios";
// import Category from "./Category";

// export default function Navbar() {
//     const { isAuthenticated, user } = useSelector((s) => s.auth)
//     const cart = useSelector((s) => s.myReducer);
//     const dispatch = useDispatch()
//     const nav = useNavigate()
//     const wishlist = useSelector((s) => s.wishlist);


//     const [showDropdown, setShowDropdown] = useState(false);
//     const [showModal, setShowModal] = useState(false);

//     const [query, setQuery] = useState(""); 
//     const [results, setResults] = useState([]); 


//     const handleSearch = async (e) => {
//         const value = e.target.value.trim();
//         setQuery(value);

//         if (value.length === 0) {
//             setResults([]);

//             return;
//         }

//         try {
//             const res = await axios.get("http://localhost:3000/products");

//             const filtered = res.data.filter(item =>
//                 item.name.toLowerCase().includes(value.toLowerCase()) ||
//                 item.category.toLowerCase().includes(value.toLowerCase())
//             );

//             setResults(filtered);
//         } catch (err) {
//             console.error("Search Error:", err);
//         }
//     };


//     const handleLogout = () => {
//         dispatch(logout());
//         nav("/Login");
//         setShowDropdown(false);
//     };

//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
//                 <div className="container">

//                     <a className="navbar-brand fw-bold fs-4" href="/">MODISTA</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse" id="mainNavbar">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 fw-semibold">
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">HOME</a>
//                             </li>

//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                                     SHOP
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#">Men</a></li>
//                                     <li><a className="dropdown-item" href="#">Women</a></li>
//                                 </ul>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">COLLECTIONS</a>
//                             </li>

//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
//                                     WATCHES
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li><a className="dropdown-item" href="#">Smart</a></li>
//                                     <li><a className="dropdown-item" href="#">Luxury</a></li>
//                                 </ul>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">CONTACT</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link" href="#">BLOG</a>
//                             </li>
//                         </ul>

//                         <div className="d-flex align-items-center gap-3">
//                             {/* search */}

//                             <div className="position-relative">
//                                 <FaSearch
//                                     size={20}
//                                     style={{ cursor: "pointer" }}
//                                     onClick={() => setShowModal(true)}
//                                 />
//                                 {showModal && (
//                                     <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark 
//                                     bg-opacity-50 d-flex justify-content-center align-items-center" 
//                                     style={{ zIndex: 1050 }}>
//                                         <div className="bg-white p-4 rounded" style={{  width: "100%",         
//                                             maxHeight: "80vh",
//                                             overflowY: "auto",
//                                             borderRadius: 0,        
//                                             top: 0,               
//                                             left: 0,
//                                             position: "absolute"  }}>
//                                     <div className="d-flex justify-content-between align-items-center mb-3" >
//                                                 <h5 className="text-center flex-grow-1">
//                                                     What are you looking for?</h5>
//                                                 <button className="btn-close" 
//                                                 onClick={() => setShowModal(false)}></button>
//                                             </div>
//                                            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
//                                              <input
//                                                 type="text"
//                                                 value={query}
//                                                 onChange={handleSearch}
//                                                 placeholder="Search products..."
//                                                 className="form-control mb-3"
//                                             />
//                                            </div>
//                                             <div>
//                                                 {results.length > 0 ? results.map(item => (
//                                                     <div
//                                                         key={item.id}
//                                                         className="p-2 border-bottom d-flex align-items-center"
//                                                         style={{ cursor: "pointer" }}
//                                                         onClick={() => {
//                                                             setShowModal(false);
//                                                             setQuery("");
//                                                             nav(`/products/${item.id}`);
//                                                         }}
//                                                     >
//                                                         <img src={item.image} alt={item.name} width={40} height={40} className="me-2" style={{ objectFit: "contain" }} />
//                                                         {item.name}
//                                                     </div>
//                                                 )) : <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>No results found</p>}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 )}

//                             </div>

//                             {/* user login */}
//                             <div className="position-relative" onClick={() => setShowDropdown(!showDropdown)}
//                                 style={{ cursor: "pointer" }}>
//                                 {isAuthenticated ? (
//                                     <span className="fw-semibold text-secondary">
//                                         Hi, {user?.firstName || "User"}
//                                     </span>
//                                 ) : (
//                                     <FaUser size={20} />
//                                 )}
//                                 {
//                                     showDropdown &&
//                                     (
//                                         <div className="position-absolute bg-white shadow-sm rounded p-2"
//                                             style={{ top: "30px", right: 0, zIndex: 1000, minWidth: "150px", }}  >
//                                             {
//                                                 !isAuthenticated ? (
//                                                     <>
//                                                         <Link to="/Login" className="dropdown-item"
//                                                             onClick={() => setShowDropdown(false)} > Login </Link>
//                                                         <Link to="/register" className="dropdown-item" onClick={() => setShowDropdown(false)}>
//                                                             Register
//                                                         </Link>
//                                                     </>
//                                                 ) : (
//                                                     <button className="dropdown-item text-danger" onClick={handleLogout} >
//                                                         Logout </button>
//                                                 )}
//                                         </div>
//                                     )}
//                             </div>

//                             {/* <div className="position-relative">
//                                 <FaHeart size={20} />
//                             </div> */}

//                             <div className="position-relative">
//                                 <FaHeart size={20} style={{ cursor: "pointer" }} onClick={() => nav("/wishlist")} />
//                                 {wishlist.length > 0 && (
//                                     <span
//                                         className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                                         style={{ fontSize: "10px" }}
//                                     >
//                                         {wishlist.length}
//                                     </span>
//                                 )}
//                             </div>
//                             {/* <div className="position-relative">
//                                 <FaShoppingBag size={20} />
//                             </div> */}
//                             <div className="position-relative">
//                                 <FaShoppingBag size={20} style={{ cursor: "pointer" }} onClick={() => nav("/cart")} />
//                                 {cart.length > 0 && (
//                                     <span
//                                         className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                                         style={{ fontSize: "10px" }}>
//                                         {cart.length}
//                                     </span>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav >
//         </div >
//     )
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./Redux/AuthAction";
import { FaSearch, FaUser, FaHeart, FaShoppingBag } from "react-icons/fa";
import axios from "axios";

export default function Navbar() {
    const { isAuthenticated, user } = useSelector((s) => s.auth);
    const cart = useSelector((s) => s.myReducer);
    const wishlist = useSelector((s) => s.wishlist);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const [showDropdown, setShowDropdown] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    // 🔍 Search functionality
    const handleSearch = async (e) => {
        const value = e.target.value.trim();
        setQuery(value);

        if (!value) {
            setResults([]);
            return;
        }

        try {
            const res = await axios.get("http://localhost:3000/products");
            const filtered = res.data.filter(
                (item) =>
                    item.name.toLowerCase().includes(value.toLowerCase()) ||
                    item.category.toLowerCase().includes(value.toLowerCase())
            );
            setResults(filtered);
        } catch (err) {
            console.error("Search Error:", err);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        nav("/Login");
        setShowDropdown(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand fw-bold fs-4" to="/">
                    MODISTA
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4 fw-semibold">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                HOME
                            </Link>
                        </li>

                        {/* Category Dropdown */}
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                CATEGORY
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" to="/category/Clothing">
                                        Cloth
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/category">
                                        Watch
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/category">
                                        Bag
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/category">
                                        Sandal
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                ABOUT
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                CONTACT
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/#blog">
                                BLOG
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">
                                BLOG
                            </a>
                        </li>

                    </ul>

                    {/* Right Icons */}
                    <div className="d-flex align-items-center gap-3">
                        {/* Search Icon */}
                        <div className="position-relative">
                            <FaSearch
                                size={20}
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowModal(true)}
                            />
                            {showModal && (
                                <div
                                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
                                    style={{ zIndex: 1050 }}
                                >
                                    <div
                                        className="bg-white p-4 rounded"
                                        style={{
                                            width: "100%",
                                            maxHeight: "80vh",
                                            overflowY: "auto",
                                            borderRadius: 0,
                                            top: 0,
                                            left: 0,
                                            position: "absolute",
                                        }}
                                    >
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h5 className="text-center flex-grow-1">
                                                What are you looking for?
                                            </h5>
                                            <button
                                                className="btn-close"
                                                onClick={() => setShowModal(false)}
                                            ></button>
                                        </div>

                                        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                                            <input
                                                type="text"
                                                value={query}
                                                onChange={handleSearch}
                                                placeholder="Search products..."
                                                className="form-control mb-3"
                                            />
                                        </div>

                                        <div>
                                            {results.length > 0 ? (
                                                results.map((item) => (
                                                    <div
                                                        key={item.id}
                                                        className="p-2 border-bottom d-flex align-items-center"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => {
                                                            setShowModal(false);
                                                            setQuery("");
                                                            nav(`/products/${item.id}`);
                                                        }}
                                                    >
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            width={40}
                                                            height={40}
                                                            className="me-2"
                                                            style={{ objectFit: "contain" }}
                                                        />
                                                        {item.name}
                                                    </div>
                                                ))
                                            ) : (
                                                <p
                                                    className="text-muted text-center"
                                                    style={{ maxWidth: "600px", margin: "0 auto" }}
                                                >
                                                    No results found
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* User Dropdown */}
                        <div
                            className="position-relative"
                            onClick={() => setShowDropdown(!showDropdown)}
                            style={{ cursor: "pointer" }}
                        >
                            {isAuthenticated ? (
                                <span className="fw-semibold text-secondary">
                                    Hi, {user?.firstName || "User"}
                                </span>
                            ) : (
                                <FaUser size={20} />
                            )}
                            {showDropdown && (
                                <div
                                    className="position-absolute bg-white shadow-sm rounded p-2"
                                    style={{
                                        top: "30px",
                                        right: 0,
                                        zIndex: 1000,
                                        minWidth: "150px",
                                    }}
                                >
                                    {!isAuthenticated ? (
                                        <>
                                            <Link
                                                to="/Login"
                                                className="dropdown-item"
                                                onClick={() => setShowDropdown(false)}
                                            >
                                                Login
                                            </Link>
                                            <Link
                                                to="/register"
                                                className="dropdown-item"
                                                onClick={() => setShowDropdown(false)}
                                            >
                                                Register
                                            </Link>
                                        </>
                                    ) : (
                                        <button
                                            className="dropdown-item text-danger"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Wishlist */}
                        <div className="position-relative">
                            <FaHeart
                                size={20}
                                style={{ cursor: "pointer" }}
                                onClick={() => nav("/wishlist")}
                            />
                            {wishlist.length > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: "10px" }}
                                >
                                    {wishlist.length}
                                </span>
                            )}
                        </div>

                        {/* Cart */}
                        <div className="position-relative">
                            <FaShoppingBag
                                size={20}
                                style={{ cursor: "pointer" }}
                                onClick={() => nav("/cart")}
                            />
                            {cart.length > 0 && (
                                <span
                                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                    style={{ fontSize: "10px" }}
                                >
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
