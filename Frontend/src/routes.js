// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import your pages here  (e.g. import Home from './pages/Home';)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

//import your components here (if you have any)
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//import your css here (if you have any)
//import '../css/main.css';

//import your hooks here (if you have any)
import useAppContext, { AppContext } from "./Hooks/appContext";

export default function AppRoutes() {
    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}

            <Nav /> {/* <Nav> is a component that renders the nav bar.*/}

            <AppContext.Provider value={{ name: 'abood kh' }}> {/* <AppContext.Provider> is a component that provides the context for your app.*/}

                <Routes> {/* <Routes> is a component that renders your routes.*/}
                    {/* add your routes here  */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                </Routes>

            </AppContext.Provider>

            <Footer />  {/* <Footer> is a component that renders the footer.*/}

        </Router>

    ); //end return

} //end AppRoutes