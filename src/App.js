import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";

function MainPage() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-proximity sm:snap-mandatory">
      <Navbar />
      <section className="h-screen snap-start"><Home /></section>
      <section className="h-screen snap-start"><About /></section>
      <section className="h-screen sm:snap-start"><Contact /></section>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/"        element={<MainPage />} />
        <Route path="/skills"  element={<Skills />}   />
        <Route path="/work"    element={<Work />}     />
      </Routes>
    </div>
  );
}

export default App;