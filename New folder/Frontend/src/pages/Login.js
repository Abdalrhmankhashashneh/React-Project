import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Hooks/appContext";

export default function Login() {
    const { userProvider, registerHandler } = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handelChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        }
        else {
            setPassword(e.target.value);
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        if (username === userProvider.user.email && password === userProvider.user.password) {
            userProvider.setUser({
                ...userProvider.user,
                isLoggedIn: true
            });
            alert("You are logged in");
        }
        else {
            userProvider.setUser({
                ...userProvider.user,
                isLoggedIn: false,
            });
            alert("You are not logged in");
        }
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
      
                    <form>
                      <div className="form-outline mb-3">
                        <label className="form-label " htmlFor="form3Example3cg" style={{ color: "#cda45e" }}>Your Email</label>
                        <input name="email" type="email" id="form3Example3cg" className="form-control form-control-lg" value={userProvider.userState.user.email} onChange={handelChange}/>
                      </div>
                      <div className="form-outline mb-3">
                        <label className="form-label " htmlFor="form3Example4cg" style={{ color: "#cda45e" }}>Password</label>
                        <input name="password" type="password" id="form3Example4cg" className="form-control form-control-lg" value={userProvider.userState.user.password} onChange={handelChange}/>
                      </div>
      
                      <div className="d-flex justify-content-center">
                        <button type="button"
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