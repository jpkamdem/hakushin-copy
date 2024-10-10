import { Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="grid-container">
        <Sidebar />
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
