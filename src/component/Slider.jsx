import React from 'react'

export default function Slider() {
    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel  slide" data-bs-ride="carousel" data-bs-interval="1000"  >
                <div className="carousel-inner">
                    {/* slide1 */}
                    <div className="carousel-item active">
                        <img
                            src="https://modista-demo.myshopify.com/cdn/shop/files/main-banner-2.jpg?v=1751711674&width=1780"
                            className="d-block w-100"
                            alt="slide1"
                        />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 lh-lg text-start">
                            <h1 className="fw-bold text-dark pb-3">The Fall Collection Of <br /> Women Dresses</h1>
                            <p className="text-dark mb-3">Holiday Deals On Fashion Festive 2025</p>
                            <button className="btn btn-danger px-4 fw-medium">SHOP NOW</button>
                        </div>
                    </div>

                    {/* slide2 */}
                    <div className="carousel-item" >
                        <img
                            src="https://modista-demo.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1751711673&width=1780"
                            className="d-block w-100"
                            alt="slide2"
                        />
                        <div className="carousel-caption d-flex flex-column justify-content-center align-items-start h-100 lh-lg text-start">
                            <h1 className="fw-bold text-dark pb-3">Fashion For Everyday <br /> For Women Style</h1>
                            <p className="text-dark">The 12 Biggest Spring/Summer 2025 Trends</p>
                            <button className="btn btn-danger px-4 fw-medium">SHOP NOW</button>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
