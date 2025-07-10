import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Connect from "./components/Connect";
import Home from "./components/Home";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}
