import React from 'react'

export default function Newsletter() {
    return (
        <div>
            <div className="newsletter-section py-5 " style={{
                backgroundImage: "url('https://modista-demo.myshopify.com/cdn/shop/files/newsletter-img.jpg?v=1751716708')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} data-aos='fade-up'>
                <div className="container text-center">
                    <h2 className="fs-1 fw-normal mb-3">Subscribe To Our Newsletter</h2>
                    <p className="text-muted mb-4">
                        Subscribe to our latest newsletter to get news about special discounts & upcoming sales
                    </p>

                    <div className="row justify-content-center pb-5">
                        <div className="col-md-8 col-lg-6">
                            <form className="d-flex">
                                <input type="email" className="form-control me-2 p-2" placeholder="Email" />
                                <button type="submit" className="btn fw-medium" style={{ backgroundColor: "#cb354e", color: "white" }}>
                                    SUBSCRIBE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
