import { Routes, Route, HashRouter } from "react-router-dom";
import { createContext, useState } from "react";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={"Hello verden"} />
      </Routes>
    </HashRouter>
  );
}

export default App;
