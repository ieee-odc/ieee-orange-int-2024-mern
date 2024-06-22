import { Routes } from "react-router-dom";
import { renderRouter } from "./routes/RenderRoutes";
import "./App.css";
import { routes } from "./routes/routes";
import React,{useEffect, useState} from "react";

function App() {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then(data => setBackendData(data))
  }, [])
  return (
    <div className="App">
      <Routes>{renderRouter(routes)}</Routes>
    </div>
  );
}

export default App;
