import React from "react";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  return (
    <div className="container py-5 blog-detail">

      {/* Breadcrumb Navigation */}
      <div className="small text-muted mb-4">
        <Link to="/" className="text-decoration-none text-secondary">
          Home
        </Link>{" "}
        /{" "}
        <Link to="/blog" className="text-decoration-none text-secondary">
          Blog
        </Link>{" "}
        /{" "}
        <span className="text-dark">
          How to Dress for Any Season Without Breaking the Bank
        </span>
      </div>

      {/* Blog Header */}
      <div className="text-start mb-4">
        <h2 className="fw-bold">
          How to Dress for Any Season Without Breaking the Bank
        </h2>
        <p className="text-muted mb-0">
          JULY 7, 2025 • <span className="fw-semibold">CODEBEEL DEVELOPER</span>
        </p>
      </div>

      {/* Blog Image */}
      <div className="text-start mb-5">
        <img
          src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1751862696"
          alt="Fashion Blog"
          className="img-fluid rounded shadow-sm "
          style={{ maxHeight: "480px", objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="row justify-content-start">
        <div className="col-lg-10 col-md-11 col-sm-12 text-secondary lh-lg">

          <p>
            Welcome to the ultimate shopping event that you’ve been waiting for!
            Our upcoming shopping sale is set to dazzle and delight, offering you
            the chance to snag your favorite items at unbelievable prices. Whether
            you’re a fashionista, a tech enthusiast, or someone looking to renew
            your home décor, our sale has something for everyone.
          </p>

          <p>
            Our goal is to ensure that you’re amazed by the jaw-dropping discounts
            and offers we have in store. From exclusive product bundles to
            limited-time promotions, our sale is designed to make your shopping
            experience truly unforgettable.
          </p>

          <p>
            Explore a diverse array of categories, ranging from fashion and beauty
            to electronics, home essentials, and more. Whether you’re searching
            for the latest trends or timeless classics, you’re sure to find items
            that speak to your style and preferences.
          </p>

          <p>Certainly, here are some fun tips for finding great sale items:</p>

          <ul>
            <li>Look for Clearance Sections</li>
            <li>Check Online Marketplaces</li>
            <li>Sign Up for Newsletters</li>
            <li>Follow Social Media</li>
            <li>Visit Outlet Stores</li>
          </ul>

          <p>
            Elevate your wardrobe with our collection of trendy apparel and
            accessories. From statement pieces to versatile basics, our fashion
            offerings are designed to help you express your unique style
            effortlessly.
          </p>

          <p>
            Dive into our world of technology with our impressive lineup of
            gadgets and electronics. Discover cutting-edge devices that enhance
            your daily life, from smart wearables to entertainment gadgets that
            redefine your leisure time.
          </p>

          <p>
            For your entire décor plans, our shopping sale has you covered. Choose
            from thousands of hand-picked products that transform your home into a
            stylish haven.
          </p>

          <p>
            Don’t miss out on this incredible opportunity to pick top-notch
            products at unbeatable prices. Mark your calendars, set your
            reminders, and get ready to indulge in a shopping spree like never
            before!
          </p>

          {/* Tags and Social Share */}
          <div className="d-flex justify-content-between align-items-center my-5 flex-wrap">
            <div className="text-muted small mb-2">
              <strong>Tags:</strong> Accessories, Collection, Fashion, Lifestyle,
              Summer
            </div>
            <div className="text-end">
              <span className="me-2 text-muted small">Share:</span>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-twitter me-2"></i>
              <i className="bi bi-pinterest"></i>
            </div>
          </div>

          <hr />

         
          <div className="d-flex justify-content-between align-items-center small flex-wrap">
            <Link to="/blog/3" className="text-decoration-none text-dark mb-2">
              ← 5 Ways To Stop Closet Clutter And Find Your Style
            </Link>
            <Link to="/blog/1" className="text-decoration-none text-dark mb-2">
              Quick Tips for Dressing Up Basic Outfits →
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link to="/blog" className="text-danger text-decoration-none">
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>

      {/* Inline Styling */}
      <style>
        {`
          .blog-detail {
            font-family: 'Poppins', sans-serif;
          }
          .blog-detail p {
            margin-bottom: 1.2rem;
            text-align: justify;
          }
          .blog-detail ul {
            list-style-type: disc;
            padding-left: 20px;
            margin-bottom: 1.5rem;
          }
          .blog-detail ul li {
            margin-bottom: 6px;
          }
          .blog-detail img {
            border-radius: 12px;
          }
          .blog-detail .bi {
            cursor: pointer;
            font-size: 1rem;
            transition: color 0.2s;
          }
          .blog-detail .bi:hover {
            color: #dc3545;
          }
          @media (max-width: 768px) {
            .blog-detail h2 {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}
