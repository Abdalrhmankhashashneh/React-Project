export default function Footer() {

    return (
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6">
                <div className="footer-info">
                  <h3>Restaurantly</h3>
                  <p>
                    A108 Adam Street <br />
                    NY 535022, USA<br /><br />
                    <strong>Phone:</strong> +1 5589 55488 55<br />
                    <strong>Email:</strong> restaurantly@gmail.com<br />
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/about">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/contact">Contact us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/floor">our floors</a></li>
                  {/* <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li> */}
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/about">Different Floors</a></li>
              
                  <li><i className="bx bx-chevron-right"></i> <a href="/about">Special Chefs</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Special View</a></li>
                 
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>

              </div>

            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
          </div>
          <div className="credits">

          </div>
        </div>
      </footer>
    );
}