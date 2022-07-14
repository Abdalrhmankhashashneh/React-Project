import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../Hooks/appContext";


export default function Login() {

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }, [])


  const { userState, setUser, registerHandler, logged_user, setLogged_user, logoutHandler, loggin_user, setLoggin_user, loginHandler } = useContext(AppContext);
  const navigate = useNavigate();

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  })

  const handelChange = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    loginHandler(loginInput, navigate);
  }

  return (
    <section className=" bg-image my-5"
      style={{ backgroundImage: "url('assets/img/about.jpg')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5" style={{ color: "#cda45e" }}>Login</h2>

                  <form onSubmit={handelSubmit}>
                    <div className="form-outline mb-3">
                      <label className="form-label " htmlFor="form3Example3cg" style={{ color: "#cda45e" }}>Your Email</label>
                      <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={loginInput.email} onChange={handelChange} />
                      <span className="text-danger">{loggin_user.error_list.email ? loggin_user.error_list.email : loggin_user.error_credential}</span>
                    </div>
                    <div className="form-outline mb-3">
                      <label className="form-label " htmlFor="form3Example4cg" style={{ color: "#cda45e" }}>Password</label>
                      <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" value={loginInput.password} onChange={handelChange} />
                      <span className="text-danger">{loggin_user.error_list.password && loggin_user.error_list.password}</span>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="submit"
                        className="login-a-table-btn fw-bold">Login</button>
                    </div>

                    <p className="text-center mt-5 mb-0" style={{ color: "#cda45e" }}>Doesn't have an account? <Link to="/register"
                      className="fw-bold" style={{ color: "#cda45e" }}><u>Register</u></Link></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} //end Login