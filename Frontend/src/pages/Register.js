import { useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Hooks/appContext";
 const Register =()=> {

  useEffect(()=>{
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
},[])


  const navigate = useNavigate();
    // const [registerInput, setregisterInput] = useState({
    //         name: "",
    //         email: "",
    //         phone: "",
    //         password: "",
    //         confirmPassword: ""
    // });

    // const handelChange = (e) => {
    //     setregisterInput({ ...registerInput, [e.target.name]: e.target.value });
    // };

    const { userState, setUser, registerHandler, logged_user, setLogged_user, logoutHandler, loggin_user,setLoggin_user, loginHandler} = useContext(AppContext);
    
    const handelChange = (e) => {
        setUser({
            ...userState,
            user: {
                ...userState.user,
                [e.target.name]: e.target.value
            }
        });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        registerHandler(userState.user,navigate)
    }


console.log(userState.error_list)
    return (

<section className=" bg-image my-5"
  style={{ backgroundImage: "url('assets/img/about-bg.jpg')", backgroundColor: "rgba(255,255,255)"}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5" style={{ color: "#cda45e" }}>Create an account</h2>

              <form onSubmit={handelSubmit}>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example1cg" style={{ color: "#cda45e" }}>Your Name</label>
                  <input name="name" type="text" id="form3Example1cg" className="form-control form-control-lg" value={userState.user.name}  onChange={handelChange}/>
                  <span className="text-danger">{userState.error_list.name}</span>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example3cg" style={{ color: "#cda45e" }}>Your Email</label>
                  <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={userState.user.email} onChange={handelChange}/>
                  <span className="text-danger">{userState.error_list.email}</span>
                </div>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example5cg" style={{ color: "#cda45e" }}>Your Phone</label>
                  <input name="phone" type="text" id="form3Example5cg" className="form-control form-control-lg" value={userState.user.phone} onChange={handelChange}/>
                  <span className="text-danger">{userState.error_list.phone}</span>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4cg" style={{ color: "#cda45e" }}>Password</label>
                  <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" value={userState.user.password} onChange={handelChange}/>
                  <span className="text-danger">{userState.error_list.password}</span>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4cdg" style={{ color: "#cda45e" }}>Repeat your password</label>
                  <input name="password_confirmation" type="password" id="form3Example4cdg" className="form-control form-control-lg" value={userState.user.password_confirmation} onChange={handelChange}/>
                  <span className="text-danger">{userState.error_list.password_confirmation}</span>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg"  onChange={handelChange}/>
                  <label className="form-check-label" htmlFor="form2Example3cg" style={{ color: "#cda45e" }}>
                    I agree all statements in <a href="#!" className=""><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit"
                    className="login-a-table-btn fw-bold">Register</button>
                </div>

                <p className="text-center mt-5 mb-0" style={{ color: "#cda45e" }}>Have already an account? <Link to="/login"
                    className="fw-bold"><u>Login</u></Link></p>

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


export default Register;