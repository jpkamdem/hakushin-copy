import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <Sidebar />
        <MainComponent />
      </div>
    </>
  );
}
