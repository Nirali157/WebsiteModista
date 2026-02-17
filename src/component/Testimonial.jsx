import React from 'react'

export default function Testimonial() {
    return (
        <div className="bg-light py-5" data-aos='fade-up'>
            <div className="container text-center">
                <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-inner mb-5">
                        <div className="carousel-item active mb-5">
                            <div className="mb-1">
                                <span style={{ fontSize: "3rem", color: "#c0392b" }}>&quot;</span>
                            </div>
                            <p className="lead text-center">
                                Eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                ipsum suspendisse <br /> ultrices gravida risus commodo bendo viverra
                                maecenas <br /> accumsan lacus vel facilisis libero.
                            </p>
                            <h5 className="mt-3 fw-bold">Mr. Luies Charls</h5>
                        </div>

                        <div className="carousel-item mb-5">
                            <div className="mb-1">
                                <span style={{ fontSize: "3rem", color: "#c0392b" }}>&quot;</span>
                            </div>
                            <p className="lead">
                                Eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                ipsum suspendisse <br /> ultrices gravida risus commodo bendo viverra
                                maecenas <br /> accumsan lacus vel facilisis libero.
                            </p>
                            <h5 className="mt-3 fw-bold">Ms. Sarah Johnson</h5>
                        </div>

                        <div className="carousel-item mb-5">
                            <div className="mb-1">
                                <span style={{ fontSize: "3rem", color: "#c0392b" }}>&quot;</span>
                            </div>
                            <p className="lead">
                                Eiusmod tempor incididunt ut labore et dolore magna aliqua quis
                                ipsum suspendisse <br /> ultrices gravida risus commodo bendo viverra
                                maecenas <br /> accumsan lacus vel facilisis libero.
                            </p>
                            <h5 className="mt-3 fw-bold">Mr. John Smith</h5>
                        </div>
                    </div>
                    <div className="carousel-indicators" style={{ bottom: "0px", margin: 0,padding: 0,
                         gap: "6px"}}>

                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0"
                            className="active " aria-current="true" aria-label="Slide 1"
                            style={{ background: '#6c757d', opacity: '1',borderRadius:'50%', 
                            width:'10px', height:'0px' }}></button>

                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"
                            aria-label="Slide 2" style={{
                                width: "10px", height: '0px', borderRadius: '50%',
                                background: '#6c757d', opacity: '1'
                            }} ></button>

                        <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"
                            aria-label="Slide 3" style={{
                                width: "10px", height: '0px', borderRadius: '50%',
                                background: '#6c757d', opacity: '1'
                            }}></button>

                    </div>
                </div>
            </div>
        </div>
    )
}
