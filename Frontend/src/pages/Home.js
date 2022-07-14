import { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { AppContext } from '../Hooks/appContext';
import { useState } from 'react';
import axios from 'axios'

function Home() {
  const [floor, setFloor] = useState([]);
  const { state } = useContext(AppContext);
  console.log(state);

  useEffect(() => {
    axios('http://127.0.0.1:8000/api/floor_type').then((res) => {
      setFloor(res.data);
      console.log(res);


    })
  }, []);



  return (
    <>




      <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Restaurantly</span></h1>
              <h2>You Don't Need an inspirational qoute , when you have good food ..</h2>
              <h2>So Come and TRY .. !</h2>

              <div className="btns">
                <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                <a href="/floor" className="btn-book animated fadeInUp scrollto">Book a Table</a>
              </div>
            </div>
{/* 
            <div class="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" class="glightbox play-btn"></a>
        </div> */}
        



          </div>
        </div>
      </section>

      <main id="main">


        {/* <section id="about" className="about">
          <div className="container" data-aos="fade-up">

            <div className="row">
              <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                <div className="about-img">
                  <img src="assets/img/about.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>

          </div>
        </section> */}


        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Services</h2>
              <p>Our Servicess</p>
            </div>

            <div className="row">


              {floor.map((item) => (



                <div className="col-lg-4" >
                  <NavLink to={`floor/${item.id}`}>

                    <div className="box" data-aos="zoom-in" data-aos-delay="100" style={{ height: '300px' }}>




                      <span>{item.name}</span>
                      <h4>{item.img}</h4>
                      <p>{item.description}</p>

                    </div>  </NavLink>
                </div>



              ))}







              {/* 
              //  <div className="col-lg-4 mt-4 mt-lg-0">
              // <Link to="/floor">
              //   <div className="box" data-aos="zoom-in" data-aos-delay="200">
              //     <span>General</span>
              //     <h4>Repellat Nihil</h4>
              //     <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
              //   </div>
              //   </Link>
              // </div>  */}

              {/* //  <div className="col-lg-4 mt-4 mt-lg-0">
              // <Link to="/floor">
              //   <div className="box" data-aos="zoom-in" data-aos-delay="300">
              //     <span>Family</span>
              //     <h4> Ad ad velit qui</h4>
              //     <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              //   </div>
              //   </Link>
              // </div>  */}

            </div>

          </div>
        </section>





        <section id="specials" className="specials">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Specials</h2>
              <p>Check Our Specials</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Lobster Newburg</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Waldorf Salad</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Bucatini all'amatriciana</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-4">soul food</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Cobb Salad</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div className="tab-pane active show" id="tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3> The Lobster Newburg</h3>
                        <p className="fst-italic">Ben Wenberg, a successful sea captain in the West Indes fruit trade, is rumored to be responsible for this creamy, decadent seafood dish. </p>
                        <p> In 1876, Wenberg shared his recipe with Charles Delmonico of Delmonico's restaurant , and it subsequently appeared on the menu as "Lobster a la Wenburg."</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-1.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>The Waldorf salad</h3>
                        <p className="fst-italic">which features apples, celery, grapes, and chopped walnuts over a bed of greens, is named after the establishment that birthed it: the Waldorf-Astoria Hotel in New York City</p>
                        <p>According to The New York Times, the dish was dreamed up by maitre-d'hotel Oscar Tschirky. When the hotel served it at a charity ball for Saint Mary's Hospital for Children in 1893, it was met with rave reviews. Today, it's still served at the Waldorf and on menus all over the country.</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-2.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3> The Bucatini all'amatriciana</h3>
                        <p className="fst-italic">	Traditional Amatrice dish, made with bucatini pasta, with tomatoes, guanciale, Pecorino Romano cheese and black pepper.</p>
                        <p>A baked pasta dish, made with cannelloni (a cylindrical type of pasta) filled with a sauce of ricotta cheese and spinach and covered by a tomato sauce</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-3.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3> The soul food</h3>
                        <p className="fst-italic"> the foods and techniques associated with the African American cuisine of the United States.</p>
                        <p>The term was first used in print in 1964 during the rise of “Black pride,” when many aspects of African American culture—including soul music—were celebrated for their contribution to the American way of life. The term celebrated the ingenuity and skill of cooks who were able to form a distinctive cuisine despite limited means.</p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-4.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3> The Cobb Salad</h3>
                        <p className="fst-italic">Cobb shared the dish with his friend, Sid Grauman of the even-more legendary Grauman's Chinese Theatre, and the next day, Grauman came back asking for a "Cobb Salad."</p>
                        <p>In 1937, the everything-but-the-kitchen-sink dish was officially added to the restaurant's menu, and stars like Spencer Tracy, Clark Gable, and Lucille Ball were gobbling it up.

                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src="assets/img/specials-5.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* <section id="events" className="events">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Events</h2>
              <p>Organize Your Events in our Restaurant</p>
            </div>

            <div className="events-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Birthday Parties</h3>
                      <div className="price">
                        <p><span>$189</span></p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src="assets/img/event-private.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Private Parties</h3>
                      <div className="price">
                        <p><span>$290</span></p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="row event-item">
                    <div className="col-lg-6">
                      <img src="assets/img/event-custom.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                      <h3>Custom Parties</h3>
                      <div className="price">
                        <p><span>$99</span></p>
                      </div>
                      <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <ul>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li><i className="bi bi-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li><i className="bi bi-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      </ul>
                      <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section> */}




        <section id="menu" className="menu section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Menu</h2>
              <p>Check Our Tasty Menu</p>
            </div>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                {/* <ul id="menu-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-starters">Starters</li>
                  <li data-filter=".filter-salads">Salads</li>
                  <li data-filter=".filter-specialty">Specialty</li>
                </ul> */}
              </div>
            </div>

            <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Lobster Bisque</a><span>$5.95</span>
                </div>
                <div className="menu-ingredients">
                  tomato pasta, salt, heavy cream, Lobster
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Bread Barrel</a><span>$6.95</span>
                </div>
                <div className="menu-ingredients">
                  Batter, egg, suger, milk, vanilla
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/cake.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Crab Cake</a><span>$7.95</span>
                </div>
                <div className="menu-ingredients">
                  A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Caesar Selections</a><span>$8.95</span>
                </div>
                <div className="menu-ingredients">
                  chicken, cheese, caeser soya, parmissan
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Tuscan Grilled</a><span>$9.95</span>
                </div>
                <div className="menu-ingredients">
                  Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-starters">
                <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Mozzarella Stick</a><span>$4.95</span>
                </div>
                <div className="menu-ingredients">
                  cheese, mozzarella, garlic salt , seasoned bread crumbs
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Greek Salad</a><span>$9.95</span>
                </div>
                <div className="menu-ingredients">
                  Fresh spinach, crisp romaine, tomatoes, and Greek olives
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-salads">
                <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Spinach Salad</a><span>$9.95</span>
                </div>
                <div className="menu-ingredients">
                  Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                </div>
              </div>

              <div className="col-lg-6 menu-item filter-specialty">
                <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="" />
                <div className="menu-content">
                  <a href="#">Lobster Roll</a><span>$12.95</span>
                </div>
                <div className="menu-ingredients">
                  Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                </div>
              </div>

            </div>

          </div>
        </section>



        {/* <section id="book-a-table" className="book-a-table">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Reservation</h2>
              <p>Book a Table</p>
            </div>

            <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100">
              <div className="row">
                <div className="col-lg-4 col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
                  <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Book a Table</button></div>
            </form> 

          </div>
        </section> */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Testimonials</h2>
              <p>What they're saying about us</p>
            </div>

            <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      BEST RESTURANT 
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="testimonial-item">
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                  </div>
                </div>

              </div>
              <div className="swiper-pagination"></div>
            </div>





 
 

          </div>
        </section>



        {/* <section id="gallery" className="gallery">

          <div className="container" data-aos="fade-up">
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

          </div>
        </section> */}

        {/* 
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
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
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
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
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
                    <div className="social">
                      <a href=""><i className="bi bi-twitter"></i></a>
                      <a href=""><i className="bi bi-facebook"></i></a>
                      <a href=""><i className="bi bi-instagram"></i></a>
                      <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section> */}
        {/* <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </div>
          </div>



          <div className="container" data-aos="fade-up">

            <div className="row mt-5">

              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>

                  <div className="open-hours">
                    <i className="bi bi-clock"></i>
                    <h4>Open Hours:</h4>
                    <p>
                      Monday-Saturday:<br />
                      11:00 AM - 2300 PM
                    </p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>info@example.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+1 5589 55488 55s</p>
                  </div>

                </div>

              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">

                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group mt-3">
                    <textarea className="form-control" name="message" rows="8" placeholder="Message" required />
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>

              </div>

            </div>

          </div>
        </section> */}

      </main>

      {/* <footer id="footer">
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
                    <strong>Email:</strong> info@example.com<br />
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
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
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
      </footer> */}
      {/* <div id="preloader"></div>
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}

    </>
  );

}

export default Home;
