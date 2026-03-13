import Home from "./components/home.jsx";
import Navbar from "./components/navbar";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/contact";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/portfolio' element={
          <>
            <Home />
            <About />
            <Contact />
          </>
          } 
        />
        <Route path='/skills' element={<Skills />}/>
        <Route path='/work' element={<Work />}/>
      </Routes>
    </div>
  );
}

export default App;
