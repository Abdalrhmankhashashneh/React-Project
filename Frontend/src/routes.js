// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
//import your pages here  (e.g. import Home from './pages/Home';)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Floor from "./pages/Floor";
import Book from "./pages/Book";
import Update from "./pages/EditProfile";

//import your components here (if you have any)
import Nav from "./components/Nav";
import Footer from "./components/Footer";


//import your css here (if you have any)
//import '../css/main.css';

//import your hooks here (if you have any)
import { AppContext } from "./Hooks/appContext";

export default function AppRoutes() {


    //create your global state here (e.g. const [state, setState] = useState({});)
    const [userState, setUser] = useState({
        user: {
            name: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
        },
        error_list: []

    });

    // const userProvider = useMemo(()=>({userState, setUser}), [userState, setUser])


    // const http = axios.create({
    //     baseUrl: 'http://127.0.0.1:8000/',
    //     headers: {
    //         'X-Requested-With': 'XMLHttpRequest',
    //     },
    //     withCredentials: true,
    // })
    // useEffect(() => { }, [userState])

    const registerHandler = (user, navigate) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/users',
            // headers: {Authorization: 'Bearer ' + 'token'},
            headers: { Accept: 'application/json' },
            data: user
        }).then((res) => {
            console.log(res);
            if (res.data.status === 200) {

                console.log(res.data.users)
                console.log(userState.error_list)
                console.log(userState.user)
                // localStorage.setItem('user', JSON.stringify(res.data.user))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
                setUser({
                    user: {
                        name: "",
                        email: "",
                        phone: "",
                        password: "",
                        password_confirmation: "",
                    },
                    error_list: []

                })

                navigate('/login')

            } else {
                setUser({ ...userState, error_list: res.data.validation_errors })
            }
        }).catch((err) => console.log(err))

        // const res = await fetch('http://127.0.0.1:8000/api/users', {
        //   method: "POST",
        //   headers: { 'Accept': 'application/json',
        //   'Content-Type': 'application/json'},
        //   body: JSON.stringify(user),
        // });
        // if (res.status === 200) {

        //         }else{
        //             console.log(res)
        //             setUser({ ...userState ,error_list: res.validation_errors })

        //         }
        // console.log(await res.json())

    };

    // console.log(JSON.parse(localStorage.getItem('user')))
    const [loggin_user, setLoggin_user] = useState({
        user: (JSON.parse(localStorage.getItem('logged_user'))),
        error_list: [],
        error_credential: ''
    })
    const loginHandler = (loginInput, navigate) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/users/login',
            // headers: {Authorization: 'Bearer ' + 'token'},
            //  headers: { Accept: 'application/json' },
            data: loginInput
        }).then(res => {
            if (res.data.status === 200) {
                setLoggin_user({ ...loggin_user, user: localStorage.setItem('logged_user', JSON.stringify(res.data.logged_user)) });
                // console.log(loggin_user)
                // console.log(JSON.parse(localStorage.getItem('logged_user')))
                // console.log(JSON.parse(localStorage.getItem('logged_user')).id)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/')

            } else if (res.data.status === 401) {
                setLoggin_user({ ...loggin_user, error_list: res.data.validation_errors })
                // console.log(loginInput.error_list)
            } else {
                setLoggin_user({ ...loggin_user, error_credential: res.data.error })
                // console.log(loginInput.error_list)
                // console.log(loginInput.error_credential)
                // setLoginInput({ ...loginInput, error_list: res.data.validation_errors })
                // console.log(loginInput.error_list)
            }
        }).catch((err) => console.log(err))

    }

    const [logged_user, setLogged_user] = useState(true)
    // console.log(logged_user)
    const logoutHandler = (e) => {
        // setLogged_user(!logged_user)
        setLoggin_user({ ...loggin_user, user: {} })
        localStorage.removeItem('logged_user')
        
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Logged Out successfully`,
                showConfirmButton: false,
                timer: 1500
            });
        
    }
    // useEffect(() => {},[logged_user])
   // const User=JSON.parse(localStorage.getItem('logged_user'));
//const UserName='';
//const UserId=User.id;

    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}


            <AppContext.Provider value={{ userState, setUser, registerHandler, logged_user, setLogged_user, logoutHandler, loggin_user, setLoggin_user, loginHandler }}> {/* <AppContext.Provider> is a component that provides the context for your app.*/}
                <Nav /> {/* <Nav> is a component that renders the nav bar.*/}

                <Routes> {/* <Routes> is a component that renders your routes.*/}

                    {/* add your routes here  */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/EditProfile/:id" element={<Update />} />
                    <Route path="/login" element={localStorage.getItem('logged_user') ? <Navigate to="/" /> : <Login />} />
                    <Route path="/register" element={localStorage.getItem('logged_user') ? <Navigate to="/" /> : <Register />} />
                    <Route path="/floor/:id" element={<Floor />} />
                    <Route path="/book/:floor_type_id/:table_id" element={localStorage.getItem('logged_user') ? <Book /> : <Navigate to="/login" />} />
                    <Route path='*' element={<NotFound />} />

                </Routes>

                <Footer />  {/* <Footer> is a component that renders the footer.*/}
            </AppContext.Provider>


        </Router>

    ); //end return

} //end AppRoutes