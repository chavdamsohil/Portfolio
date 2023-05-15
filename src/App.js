import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import ProjectDisplay from "./pages/ProjectDisplay";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HashRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route
            path="/Projects/:id"
            element={<ProjectDisplay></ProjectDisplay>}
          ></Route>
          <Route path="/Experience" element={<Experience />}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </HashRouter>
  );
}

export default App;
