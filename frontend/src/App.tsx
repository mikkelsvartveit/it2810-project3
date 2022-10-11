import { Routes, Route, HashRouter } from "react-router-dom";

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
