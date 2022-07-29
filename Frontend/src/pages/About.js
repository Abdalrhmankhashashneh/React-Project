import { useEffect } from "react"
import Carousel from 'react-bootstrap/Carousel';
export default function About() {
  useEffect(()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
},[])
    return (

      <>
        <section id="about" className="about">
        <div className="container" data-aos="fade-up">

          <div className="row  " style={{marginTop:'70px'}}>
            <div className="col-lg-6 order-1 order-lg-2 " data-aos="zoom-in" data-aos-delay="100">
              <div className="about-img">
                <img src="assets/img/about.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>WELCOME TO THE Restaurantly</h3>
              <p className="fst-italic">
              Our company offers excellent Private Dining Services . We customize your meal as per your tastes, preferences, dietary restrictions, including raw/ veg to non-veg meals. Our private dining manager helps to create an ideal environment for the memorable experience of you and your guests. To know more about it . and here some of our features for you :
              </p>
              <ul>
                <li><i className="bi bi-check-circle"></i> Different floors to suit what you want and the services you prefer</li>
                <li><i className="bi bi-check-circle"></i>
A special view of our restaurant to give you a sense of comfort</li>
                <li><i className="bi bi-check-circle"></i> In our restaurant you will find the best chefs from different countries and different cultures to guarantee you diversity and deliciousness in the items</li>
              </ul>
              <p>
              Your visit will be a reason for our happiness and your happiness too, and for this reason you are always welcome
              </p>
            </div>
          </div>

        </div>
      </section>



<section id="chefs" className="chefs">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Chefs</h2>
              <p>Our Proffesional Chefs</p>
            </div>

            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay="100">
                  <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Master Chef</span>
                    </div>
                    {/* <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay="200">
                  <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Patissier</span>
                    </div>
                    {/* <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="member" data-aos="zoom-in" data-aos-delay="300">
                  <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>Cook</span>
                    </div>
                    {/* <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>



        <section id="gallery" className="gallery">

        <Carousel  >
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="assets/img/gallery/gallery-6.jpg"
          alt="First slide"
        />
        </ Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="assets/img/gallery/gallery-2.jpg"
          alt="Second slide"
        />
         </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="assets/img/gallery/gallery-1.jpg"
          alt="Third slide"
        />
         </Carousel.Item>
    </Carousel>
          {/* <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Gallery</h2>
              <p>Some photos from Our Restaurant</p>
            </div>
          </div>

          <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">

            <div className="row g-0">

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-1.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-1.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-2.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-3.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-4.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-5.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-6.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-7.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

              <div className="col-lg-3 col-md-4">
                <div className="gallery-item">
                  <a href="assets/img/gallery/gallery-8.jpg" className="gallery-lightbox" data-gall="gallery-item">
                    <img src="assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
              </div>

            </div>

          </div> */}
        </section>
        
</>


    );
}