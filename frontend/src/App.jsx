import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Emulator from "./components/Emulator/Emulator";
import Navbar from "./components/Navbar/Navbar";
import SearchResults from "./components/Pages/SearchResults";
import CategoryPage from "./components/Pages/CategoryPage";
import "./components/css/App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Emulator />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
