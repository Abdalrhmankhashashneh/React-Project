import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Book() {
  const { floor_type_id } = useParams();
  const { table_id } = useParams();
  console.log(table_id);
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])


  const [book, setBook] = useState({
    book: {
      people_count: "",
      message: "",
      date: "",
      time: "",
      floor_type_id: floor_type_id,
      table_id: table_id,
      user_id: (JSON.parse(localStorage.getItem('logged_user'))).id
    }
  });




  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //  BookHandler(book.user)
  // }


  const BookHandler = (e) => {
    e.preventDefault();
    console.log(book.book);
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/reservation',
      // headers: {Authorization: 'Bearer ' + 'token'},
      headers: { Accept: 'application/json' },
      data: book.book
    }).then((res) => {
      if (res.data.status === 200) {

        // console.log(res.data.user)
        // console.log(userState.error_list)
        // console.log(userState.user)
        // localStorage.setItem('user', JSON.stringify(res.data.user))

        setBook({
          book: {
            people_count: "",
            message: "",
            date: "",
            time: ""
          },
          error_list: []

        })

        // navigate('/book')

      } else {
        setBook({ ...book, error_list: res.data.validation_errors })
      }
    }).catch((err) => console.log(err))
    window.alert('Successfully booked !');
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'your message has been sent ',
      showConfirmButton: false,
      timer: 1500
    })
  };



  const handelChange = (e) => {
    setBook({
      ...book,
      book: {
        ...book.book,
        [e.target.name]: e.target.value
      }
    });

  }

  return (
    <section id="book-a-table" className="book-a-table" style={{ marginTop: '110px' }} >
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Reservation</h2>
          <p>Book a Table</p>
        </div>

        <form onSubmit={BookHandler} role="form" className="php-email-form" data-aos="fade-up" data-aos-delay="100"  >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              {/* <input type="hidden" value={(JSON.parse(localStorage.getItem('logged_user'))).id} name="user_id" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handelChange}/> */}

              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              {/* <input type="hidden" className="form-control" name="floor_type_id" value={floor_type_id} id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handelChange} /> */}

              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              {/* <input type="hidden" className="form-control" name="table_id"  value={table_id} id="phone" placeholder="phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handelChange}  /> */}

              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <label>Date :</label>
              <input type="date" name="date" value={book.book.date} className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handelChange} />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3" >
              <label>Time :</label>
              <input type="time" className="form-control" value={book.book.time} name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={handelChange} />
              <div className="validate"></div>
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <label>People :</label>
              <input type="number" className="form-control" value={book.book.people_count} name="people_count" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" onChange={handelChange} />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" value={book.book.message} rows="5" placeholder="Message" onChange={handelChange}></textarea>
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