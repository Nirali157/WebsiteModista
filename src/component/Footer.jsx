import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

export default function Footer() {
    const socialIcon = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        marginRight: '10px',
        borderRadius: '50%',
        backgroundColor: '#f1f1f1',
        color: 'black',
        fontSize: '18px',
        transition: 'all 0.3s ease',
        textDecoration: 'none'
    }
    return (
        <div>
            <style>
                {`
                footer ul li:hover{
                    cursor:pointer;
                        color:#cb354e}
                    `}
            </style>
            <footer className="bg-light text-dark" style={{paddingTop:'5.5%'}} data-aos='fade-up'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 mb-4 lh-lg">
                            <h5 className="fw-bold mb-3">About Information</h5>
                            <p>
                                <FaMapMarkerAlt className="text-danger me-2 " />
                                Modista - Fashion Store <br /> 507-Union Trade Ipsum Doler <br />Centre France
                            </p>
                            <p>
                                <FaEnvelope className="text-danger me-2" /> demo@example.com
                            </p>
                            <p>
                                <FaPhoneAlt className="text-danger me-2" /> (+91) 9876-543-210
                            </p>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3 mb-4 ">
                            <h5 className="fw-bold mb-3">Your Account</h5>
                            <ul className="list-unstyled lh-lg">
                                <li>Search</li>
                                <li>About Us</li>
                                <li>Delivery Information</li>
                                <li>Contact</li>
                                <li>Our Stories</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <h5 className="fw-bold mb-3">Information</h5>
                            <ul className="list-unstyled lh-lg">
                                <li>Size Chart</li>
                                <li>Shipping</li>
                                <li>Legal Notice</li>
                                <li>Delivery</li>
                                <li>Shipping & Refund</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-6 col-lg-3 mb-4">
                            <h5 className="fw-bold mb-3">Quick links</h5>
                            <ul className="list-unstyled lh-lg">
                                <li>Privacy Policy</li>
                                <li>Refund Policy</li>
                                <li>Shipping Policy</li>
                                <li>Terms of Service</li>
                                <li>Policy for Buyers</li>
                                <li>Policy for Sellers</li>
                            </ul>
                        </div>
                    </div>


                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top pt-3 mt-4 pb-3">
                        <div className="mb-3 mb-md-0">
                            <a href="https://www.facebook.com/" style={socialIcon}><FaFacebookF /></a>
                            <a href="https://www.instagram.com/" style={socialIcon}><FaInstagram /></a>
                            <a href="https://www.youtube.com/" style={socialIcon}><FaYoutube /></a>
                            <a href="https://x.com/" style={socialIcon}><FaTwitter /></a>
                        </div>
                        <p className="text-center mb-3 mb-md-0">
                            © 2025, Modista - Fashion Store Powered by Shopify
                        </p>
                        <div>
                            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="me-2" style={{ height: "38px" }} />
                            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="me-2" style={{ height: "38px" }} />
                            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="me-2" style={{ height: "38px" }} />
                            <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" className="me-2" style={{ height: "38px" }} />
                            <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" style={{ height: "38px" }} />
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}
