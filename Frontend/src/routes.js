// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import axios from 'axios';
import Swal from 'sweetalert2'
//import your pages here  (e.g. import Home from './pages/Home';)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Floor from "./pages/Floor";

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
        isLoggedIn: false,
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
    useEffect(() => { }, [userState])

    const registerHandler = (user) => {
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/users',
            // headers: {Authorization: 'Bearer ' + 'token'},
<<<<<<< HEAD
            headers: { Accept: 'application/json' },
=======
>>>>>>> 1079d86e085252d2e6c3e603efcbbd1556895625
            data: user
        }).then((res) => {
            if (res.data.status === 200) {

                console.log(res.data.user)
                console.log(userState.error_list)
                console.log(userState.user)
                localStorage.setItem('user', JSON.stringify(res.data.user))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${res.data.message}`,
                    showConfirmButton: false,
                    timer: 1500
<<<<<<< HEAD
                })
                setUser({
                    isLoggedIn: true,
=======
                  })
                  setUser( {isLoggedIn: false,
>>>>>>> 1079d86e085252d2e6c3e603efcbbd1556895625
                    user: {
                        name: "",
                        email: "",
                        phone: "",
                        password: "",
                        password_confirmation: "",
                    },
                    error_list: []

                })
            } else {
                console.log(res)
                console.log(userState.error_list)
                console.log(userState.user)
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

    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}

            <Nav /> {/* <Nav> is a component that renders the nav bar.*/}

            <AppContext.Provider value={{ userState, setUser, registerHandler }}> {/* <AppContext.Provider> is a component that provides the context for your app.*/}

                <Routes> {/* <Routes> is a component that renders your routes.*/}

                    {/* add your routes here  */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/floor" element={<Floor />} />
                </Routes>

            </AppContext.Provider>

            <Footer />  {/* <Footer> is a component that renders the footer.*/}

        </Router>

    ); //end return

} //end AppRoutes