import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Emulator from "./components/Emulator/Emulator";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SearchResults from "./components/Pages/SearchResults";
import CategoryPage from "./components/Pages/CategoryPage";
import About from "./components/Pages/About";
import "./components/css/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="particles-bg" aria-hidden="true"></div>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Emulator />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
