import React from "react";
import { Link } from "react-router-dom";

export default function Blog6() {
  return (
    <div className="blog-detail container py-5">

      {/* Breadcrumb */}
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
          Secrets to Building a Timeless Capsule Wardrobe
        </span>
      </div>

      {/* Blog Header */}
      <div className="text-start mb-4">
        <h2 className="fw-bold text-dark">
          Secrets to Building a Timeless Capsule Wardrobe
        </h2>
        <p className="text-muted">
          JULY 7, 2025 • <span className="fw-semibold">CODEBEEL DEVELOPER</span>
        </p>
      </div>

      {/* Blog Image */}
      <div className="text-start mb-5">
        <img
          src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1751862421"
          alt="Capsule Wardrobe"
          className="img-fluid rounded shadow-sm w-75"
          style={{ maxHeight: "480px", objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="row justify-content-start">
        <div className="col-lg-10 col-md-11 col-sm-12 text-secondary lh-lg">

          <p>
            Welcome to our vibrant blog, where curiosity meets knowledge and
            inspiration knows no bounds. As the renowned author X once said,
            “The more you read, the more things you will know. The more that you
            learn, the more places you’ll go.” Our space is crafted for the
            modern reader who seeks style, substance, and simplicity.
          </p>

          <h5 className="fw-bold mt-4 text-dark">Uncover Hidden Gems</h5>
          <p>
            Join us on a journey of exploration as we unearth hidden gems from
            around the world. From quaint cafes tucked away in charming alleys
            to underrated brands that deserve the spotlight, we’re here to shine
            a light on the extraordinary.
          </p>

          <h5 className="fw-bold mt-4 text-dark">Travel Tales</h5>
          <p>
            Embark on virtual adventures with our globetrotting enthusiasts.
            Traverse the bustling streets of Tokyo, wander through the serene
            landscapes of New Zealand, and immerse yourself in the rich tapestry
            of cultures that make our world so wonderfully diverse.
          </p>

          <h5 className="fw-bold mt-4 text-dark">Thought-Provoking Discussions</h5>
          <p>
            Delve deep into the realms of ideas with our thought-provoking
            articles. From philosophical ponderings on the meaning of life to
            insightful analyses of current trends, we invite you to join the
            conversation and broaden your perspective.
          </p>

          <p>
            In a world where information is abundant and time is precious, our
            blog is your sanctuary of meaningful content. Our dedicated team of
            writers and researchers brings you articles that spark curiosity,
            ignite imagination, and leave you with a sense of wonder.
          </p>

          <p>
            Whether you’re a seasoned explorer of ideas or just setting foot on
            the shores of creativity, we invite you to indulge in this rich blend
            of inspiration and knowledge that our blog has to offer. As you
            navigate through these pages, remember the wise words of Y:
            “Learning is a treasure that will follow its owner everywhere.”
          </p>

          <p>— <strong>T. Simon</strong></p>

          {/* Tags */}
          <div className="text-muted small mt-4">
            <strong>Tags:</strong> Collection, Office, Tools, Vintage
          </div>

          <hr className="my-4" />

          {/* Prev / Next Links */}
          <div className="d-flex justify-content-between align-items-center small flex-wrap">
            <span className="text-muted"></span>
            <Link
              to="/blog/5"
              className="text-decoration-none text-dark mt-2"
            >
              Next Post → The Best Fashion Hacks For Busy Parents
            </Link>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-5">
            <Link to="/blog" className="text-danger text-decoration-none">
              ← Back to blog
            </Link>
          </div>
        </div>
      </div>

      {/* Internal CSS */}
      <style>
        {`
          .blog-detail {
            font-family: 'Poppins', sans-serif;
          }
          .blog-detail p {
            margin-bottom: 1.2rem;
            line-height: 1.8;
            text-align: justify;
          }
          .blog-detail h5 {
            font-weight: 600;
          }
          .blog-detail img {
            border-radius: 12px;
          }
          @media (max-width: 992px) {
            .blog-detail h2 {
              font-size: 1.8rem;
            }
          }
          @media (max-width: 576px) {
            .blog-detail h2 {
              font-size: 1.5rem;
            }
            .blog-detail p {
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </div>
  );
}
