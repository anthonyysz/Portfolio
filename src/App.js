import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
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
