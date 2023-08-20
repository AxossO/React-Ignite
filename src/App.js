import "./styles/App.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path={["/game/:id", "/"]} element={<Home />}></Route> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:id" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
