import React from "react";
import { FaHome, FaPhoneAlt, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-light py-5 text-center" data-aos='fade-up'>
        <h2 className="fw-bold">Contact</h2>
        <p className="text-muted mb-0">
          Home / <span className="text-dark">Contact</span>
        </p>
      </section>

      {/* Contact Section */}
      <div className="container py-5" data-aos='fade-up'>
        <div className="row g-4 justify-content-center">
          {/* Left Form */}
          <div className="col-md-6">
            <div className="border p-4 rounded-2 shadow-sm bg-white">
              <h4 className="mb-4 fw-semibold">Do You Have Any Questions?</h4>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <input
                      type="text"
                      placeholder="Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email *"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="form-control"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Comment"
                    rows="4"
                    className="form-control"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger px-4 mb-4">
                  SEND
                </button>
              </form>
            </div>
          </div>

          {/* Right Info */}
          <div className="col-md-4">
            <div className="border p-4 rounded-2 shadow-sm bg-white">
              <h4 className="mb-4 fw-semibold">Get In Touch With Us</h4>
              <p className="mb-3">
                <FaHome className="me-2 text-danger" />
                <strong>Address:</strong>
                <br />
                33 New Montgomery St.
                <br />
                Ste 750 San Francisco,
                <br />
                CA, USA 94105
              </p>
              <p className="mb-3">
                <FaPhoneAlt className="me-2 text-danger" />
                <strong>Contact No.:</strong>
                <br />
                (+91) 9876-543-210
              </p>
              <p className="mb-3">
                <FaEnvelope className="me-2 text-danger" />
                <strong>Email:</strong>
                <br />
                modista@example.com
              </p>
              <p>
                <FaInfoCircle className="me-2 text-danger" />
                <strong>Store Info:</strong>
                <br />
                Monday – Friday 10 AM – 8 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
