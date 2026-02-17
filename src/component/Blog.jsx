import {Link} from 'react-router-dom'

export default function Blog() {
    const carouselcontrol={
        width: 'auto',           
        top: '50%',  
        left:'-1%',             
        transform: 'translateY(-60%)'
    }
     const carouselcontrolnext={
        width: 'auto',           
        top: '50%',  
        right:'-1%',             
        transform: 'translateY(-60%)'
    }

  return (
    <div className="bg-light py-5" data-aos='fade-up'>
       <style>
    {`
       .card {
        overflow: hidden;
        border-radius: 10px;
      }

      .card img {
        transition: transform 0.5s ease;
      }

      .card:hover img {
        transform: scale(1.1);
        overflow:hidden;
      }
    `}
  </style>
      <div className="container" id='blog'>
        <h2 className="text-center mb-5">Our Latest Blog</h2>

        {/* Blog Carousel */}
        <div
          id="blogCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row">
                {/* Blog Card 1 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-6.jpg?v=1751862757"
                      className="card-img-top"
                      alt="blog1"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                        Quick Tips For Dressing Up Basic Outfits
                      </h5>
                      <p className="card-text text-muted">
                        Fashion is not merely about clothing; it is an
                        embodiment of elegance, sophistication, and self...
                      </p>
                      <Link  to="/blog/1" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                    </div>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-5.jpg?v=1751862696"
                      className="card-img-top"
                      alt="blog2"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                        How To Dress For Any Season Without..
                      </h5>
                      <p className="card-text text-muted">
                        Trends are patterns or shifts in behavior, preferences,
                        or ideas that gain popularity within a specific ...
                      </p>
                      <Link  to="/blog/2" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                     
                    </div>
                  </div>
                </div>

                {/* Blog Card 3 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-4.jpg?v=1751862614"
                      className="card-img-top"
                      alt="blog3"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                        5 Ways To Stop Closet Clutter And Find...
                      </h5>
                      <p className="card-text text-muted">
                        Technology has become an integral part of our lives,
                        revolutionizing the way we work and communicate...
                      </p>
                      <Link  to="/blog/3" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row">
                {/* Blog Card 4 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-3.jpg?v=1751862543"
                      className="card-img-top"
                      alt="blog4"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                        Why Comfort Matters: Choosing....    
                      </h5>
                      <p className="card-text text-muted">
                        Welcome to the ultimate shopping event that you've been waiting for 
                        Our upcoming shopping sale with...
                      </p>
                      <Link  to="/blog/4" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                      
                    </div>
                  </div>
                </div>

                {/* Blog Card 5 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-2.jpg?v=1751862479"
                      className="card-img-top"
                      alt="blog5"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                        The Best Fashion Hacks for Busy Parents
                      </h5>
                      <p className="card-text text-muted">
                       Welcome to the digital world, where technology is constantly evolving
                        and shaping the way we live, ...
                      </p>
                      <Link  to="/blog/5" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                     
                    </div>
                  </div>
                </div>

                {/* Blog Card 6 */}
                <div className="col-md-4">
                  <div className="card border-0">
                    <img
                      src="https://modista-demo.myshopify.com/cdn/shop/articles/blog-1.jpg?v=1751862421"
                      className="card-img-top"
                      alt="blog6"
                    />
                    <div className="card-body">
                      <p className="text-danger fw-bold">JULY 7, 2025</p>
                      <h5 className="card-title fw-bold">
                            Secrets to Building a Timeless Capsule...                      
                      </h5>
                      <p className="card-text text-muted">
                        In a world where information is abundant and time is precious,
                         our blog is your sanctuary of meaningful...
                      </p>
                      <Link  to="/blog/6" className="fw-bold text-dark text-decoration-underline">  READ MORE</Link>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev" type="button" data-bs-target="#blogCarousel"
            data-bs-slide="prev" style={carouselcontrol}  >
            <span className="carousel-control-prev-icon rounded-circle bg-black " aria-hidden="true"
            style={{backgroundSize: "20px", fontWeight:'bold'}}></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#blogCarousel" 
            data-bs-slide="next" style={carouselcontrolnext}>
            <span className="carousel-control-next-icon rounded-circle bg-black" aria-hidden="true"
            style={{backgroundSize: "20px", fontWeight:'bold'}} ></span>
          </button>

        </div>
      </div>
    </div>
  )
}
