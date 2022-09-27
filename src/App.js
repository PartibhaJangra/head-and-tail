import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import HeadAndTail from "./routes/head-and-tail/head-and-tail.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/head-and-tail" element={<HeadAndTail />} />
      </Routes>
    </div>
  );
}

export default App;
