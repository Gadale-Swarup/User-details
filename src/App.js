// import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import Sidenavbar from "./components/Sidenavbar";
import User from "./components/User";
import {Route, Routes } from "react-router-dom";

function App() {
  // const [name, setName] = useState("");
  return (
    <div className="main">
      {/* <Navbar name={name} /> */}
      <Sidenavbar />
      <Routes>
        <Route path="/User/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;