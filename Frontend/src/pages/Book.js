import { useState } from "react";

export default function Book() {

  const [user, setUser] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [msg, setMsg] = useState('');
  const [ms, setMs] = useState('');
  const [email, setEmail] = useState('');

  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');
  const [peopleErr, setPeopleErr] = useState(false);

  function loginHandler(e) {

    e.preventDefault();

  }


  const handleEmailchange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    setEmail(e.target.value);

    if (emailRegex.test(email)) {
      setIsValid(true);
      setMsg('Your email looks good!');
    } else {
      setIsValid(false);
      setMsg('Please enter a valid email!');
    }

  }

  const handlePhone = (e) => {
    const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    setPhone(e.target.value);

    if (PHONE_REGEX.test(phone)) {
      setIsValid(true);
      setMs('Your email looks good!');
    } else {
      setIsValid(false);
      setMs('Please enter a valid phone number');
    }

  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true)
    }
    else {
      setUserErr(false)
    }
  }



  function pplHandler(e) {
    let item = e.target.value;
    if (item > 10) {
      setPeopleErr(true)
    }
    else {
      setPeopleErr(false)
    }

  }

  return (
    <section id="book-a-table" className="book-a-table" style={{ marginTop: '110px' }}>
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form onSubmit={loginHandler} action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100" >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={userHandler} />
              {userErr ? <span >Must be at least 4 characters</span> : null}
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleEmailchange} />
              <div className={`message ${isValid ? 'success' : 'error'}`}>
                {msg}
              </div>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <input type="text" className="form-control" name="phone" id="phone" placeholder="phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handlePhone} />
              <div className={`ms ${isValid ? 'success' : 'error'}`}>
                {ms}
              </div>
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="date" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="time" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" onChange={pplHandler} />
              {peopleErr ? <span >must be less than 10</span> : null}
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
    </section>

  );
}