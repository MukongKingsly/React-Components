import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { Navbar, ComponentOne } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <div className="container">
          <Navbar />
          <div className="innerContainer">
            <Routes>
              <Route index element={<ComponentOne />} />
              <Route path="/signupone" element={<ComponentOne />} />
            </Routes>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
