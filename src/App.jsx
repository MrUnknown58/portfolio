import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button } from "@material-tailwind/react";
import Home from "./Pages/Home";
import { AnimatePresence } from "framer-motion";
import LayoutTopBar from "./components/LayoutTopBar";
import { Route, Routes, useLocation } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import About from "./Pages/About";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  return (
    <>
      {/* <LayoutTopBar/> */}
      <AnimatePresence mode="popLayout">
        <Routes location={location} key={location.key}>
          {/* <Route path="/" element={<Home />} key={location.key}/> */}
          <Route
            exact path="/"
            element={[<Home />, <LayoutTopBar />, <Footer />]}
            key={location.key}
          />
          <Route
            exact path="/menu"
            element={[<MenuPage />, <LayoutTopBar />]}
            key={location.key}
          />
          <Route
            exact path="/about"
            element={[<About />, <LayoutTopBar />, <Footer />]}
            key={location.key}
          />
          <Route
            exact path="/contact"
            element={[<Contact />, <LayoutTopBar />, <Footer />]}
            key={location.key}
          />
          <Route
            exact path="/projects/:projectid"
            element={[<Projects />, <LayoutTopBar />, <Footer />]}
            key={location.key}
          />
        </Routes>
      </AnimatePresence>
      {/* <div>Hello</div> */}
    </>
  );
}

export default App;
