import { Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [toggleView, setToggleView] = useState(false);

  return (
    <>
      <div className="grid-container">
        <Sidebar isOpen={toggleView} />
        <Navbar setToggleView={setToggleView} isOpen={toggleView} />
        <MainComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </MainComponent>
      </div>
    </>
  );
}

export default App;
