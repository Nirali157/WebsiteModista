import React from "react";
import { Link } from "react-router-dom";

export default function Blog3() {
  return (
    <div className="blog-detail container py-5">

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
          5 Ways to Stop Closet Clutter and Find Your Style
        </span>
      </div>

      {/* Blog Header */}
      <div className="text-start mb-4">
        <h2 className="fw-bold">
          5 Ways to Stop Closet Clutter and Find Your Style
        </h2>
        <p className="text-muted">
          JULY 7, 2025 • <span className="fw-semibold">CODEBEEL DEVELOPER</span>
        </p>
      </div>

      {/* Blog Image */}
      <div className="text-start mb-5">
        <img
          src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-4.jpg?v=1751862614&width=750"
          alt="Closet Blog"
          className="img-fluid rounded shadow-sm w-75"
          style={{ maxHeight: "480px", objectFit: "cover" }}
        />
      </div>

      {/* Blog Content */}
      <div className="row justify-content-start">
        <div className="col-lg-10 col-md-11 col-sm-12 text-secondary lh-lg">

          <p>
            Welcome to the digital world, where technology is constantly evolving
            and shaping the way we live, work, and communicate. In this blog post,
            we will delve into the exciting innovations that define modern living
            in the Digital Revolution.
          </p>

          <h5 className="fw-bold mt-4 text-dark fs-4">
            What is the Digital World?
          </h5>
          <p>
            The digital world refers to the interconnected network of devices,
            systems, and platforms that enable the transfer and exchange of
            information. It encompasses everything from communication tools and
            online services to data-driven applications and artificial
            intelligence.
          </p>

          <h5 className="fw-bold mt-4 text-dark fs-4">
            How is the Digital World Impacting Our Lives?
          </h5>
          <p>
            The digital world has transformed how we live in numerous ways. From
            the way we shop and share to how we impact a more efficient
            environment, its influence touches every part of our daily routine.
          </p>
          <p>
            In the digital world, communication has become faster, more efficient,
            and more accessible. With the rise of social media, instant messaging,
            and video conferencing, we connect across the globe instantly.
          </p>

          <blockquote className="fst-italic bg-light p-3 border-start border-3 border-danger my-4 rounded">
            “In the digital world, art is no longer confined to canvas, but is
            woven into the fabric of our everyday lives.”
          </blockquote>

          <h5 className="fw-bold mt-4 text-dark fs-4">What Does the Future Hold?</h5>
          <p>
            The digital world is continuously evolving, and the future holds even
            more exciting possibilities. Here are some trends that are shaping the
            future of technology:
          </p>

          <ol>
            <li className="text-dark fs-5">
              <strong>Internet of Things (IoT)</strong>
            </li>
            <p>
              The Internet of Things refers to interconnected devices and gadgets
              that can communicate with each other. In the future, we can expect
              to see smart homes, cities, and industries powered by IoT.
            </p>

            <li className="mt-3 fs-5 text-dark">
              <strong>Artificial Intelligence (AI)</strong>
            </li>
            <p>
              AI technology is rapidly advancing and has applications in healthcare,
              finance, and entertainment. As AI continues to evolve, it will
              become more intelligent and efficient, making our lives easier.
            </p>

            <li className="mt-3 fs-5 text-dark">
              <strong>Blockchain</strong>
            </li>
            <p>
              Blockchain technology offers secure and transparent data management.
              It has potential to transform industries like finance, supply chain,
              and healthcare.
            </p>
          </ol>

          <h5 className="fw-bold mt-4 text-dark">Conclusion</h5>
          <p>
            The digital world is here to stay, and embracing technology for its
            advantages can lead to a simplified, fast, and more connected life.
            From communication to collaboration, business to entertainment,
            technology continues to redefine how we live and interact with the
            world around us.
          </p>

         
          <div className="d-flex justify-content-between align-items-center my-5 flex-wrap">
            <div className="text-muted small mb-2">
              <strong>Tags:</strong> Closet, Fashion, Furniture, Summer, Vintage
            </div>
           
          </div>

         
          <hr />
          <div className="d-flex justify-content-between align-items-center small flex-wrap">
            <Link
              to="/blog/1"
              className="text-decoration-none text-dark mb-2"
            >
              ← Why Comfort Matters: Choosing Fashion That Feels Good
            </Link>
            <Link
              to="/blog/2"
              className="text-decoration-none text-dark mb-2"
            >
              How to Dress for Any Season Without Breaking the Bank →
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
          .blog-detail ul, .blog-detail ol {
            padding-left: 20px;
            margin-bottom: 1.5rem;
          }
          .blog-detail li {
            margin-bottom: 6px;
          }
          .blog-detail img {
            border-radius: 12px;
          }
          .blog-detail .bi {
            cursor: pointer;
            font-size: 1rem;
            transition: color 0.3s ease;
          }
          .blog-detail .bi:hover {
            color: #dc3545;
          }
          @media (max-width: 768px) {
            .blog-detail h2 {
              font-size: 1.6rem;
            }
            .blog-detail ol li {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
