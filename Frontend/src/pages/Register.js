import { useContext, useState } from "react";
import { AppContext } from "../Hooks/appContext";
export default function Register() {
    const { state, setState } = useContext(AppContext);
    const handelChange = (e) => {
        setState({
            ...state,
            user: {
                ...state.user,
                [e.target.name]: e.target.value
            }
        });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(state.user);
    }



    return (

<section className=" bg-image my-5"
  style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5 text-dark">Create an account</h2>

              <form>

                <div className="form-outline mb-3">
                  <input name="name" type="text" id="form3Example1cg" className="form-control form-control-lg" value={state.user.name}  onChange={handelChange}/>
                  <label className="form-label text-dark" htmlFor="form3Example1cg">Your Name</label>
                </div>

                <div className="form-outline mb-3">
                  <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={state.user.email} onChange={handelChange}/>
                  <label className="form-label text-dark" htmlFor="form3Example3cg">Your Email</label>
                </div>
                <div className="form-outline mb-3">
                  <input name="phone" type="text" id="form3Example5cg" className="form-control form-control-lg" value={state.user.phone} onChange={handelChange}/>
                  <label className="form-label text-dark" htmlFor="form3Example5cg">Your Phone</label>
                </div>

                <div className="form-outline mb-3">
                  <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" value={state.user.password} onChange={handelChange}/>
                  <label className="form-label text-dark" htmlFor="form3Example4cg">Password</label>
                </div>

                <div className="form-outline mb-3">
                  <input name="repassword"type="password" id="form3Example4cdg" className="form-control form-control-lg" value={state.user.repassword} onChange={handelChange}/>
                  <label className="form-label text-dark" htmlFor="form3Example4cdg">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg"  onChange={handelChange}/>
                  <label className="form-check-label text-dark" htmlFor="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-outline-dark btn-block btn-lg gradient-custom-4 ">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        
        // <div className="container my-5">
        //     <h1>Register</h1>
        //     <form onSubmit={handelSubmit}>
        //         <label htmlFor="username">Username</label>
        //         <input type="text" id="username" name="name" onChange={handelChange} />
        //         <label htmlFor="email">Email</label>
        //         <input type="text" id="email" name="email" onChange={handelChange} />
        //         <label htmlFor="password">Password</label>
        //         <input type="password" id="password" name="password" onChange={handelChange} />
        //         <label htmlFor="confirmPassword">Confirm Password</label>
        //         <input type="password" id="confirmPassword" onChange={handelChange} name="confirmPassword" />
        //         <button type="submit">Submit</button>
        //     </form>

        // </div>
    );
} //end Register