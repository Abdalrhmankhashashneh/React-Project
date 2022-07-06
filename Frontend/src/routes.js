// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

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
            confirmPassword: ""
        }

    });

    const userProvider = useMemo(()=>({userState, setUser}), [userState, setUser])

    const registerHandler = async (user) => {
        await fetch(`http://127.0.0.1:8000/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        setUser(userState);
        
      };

    useEffect(() => {
        // console.log(user);
    }
        , [userState]);
    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}

            <Nav /> {/* <Nav> is a component that renders the nav bar.*/}

            <AppContext.Provider value={{ userProvider, registerHandler }}> {/* <AppContext.Provider> is a component that provides the context for your app.*/}

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