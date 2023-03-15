import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import IndexRoute from "./components/IndexRoute/IndexRoute";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route index element={<IndexRoute />} />
      </Routes>
    </div>
  );
}

export default App;
