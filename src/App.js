import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <h2>App.js</h2>
              <Routes>
                  <Route path="/" element={<Home/>}/>
              </Routes>
              <Routes>
                  <Route path="/new" element={<New/>}/>
              </Routes>
              <Routes>
                  <Route path="/edit" element={<Edit/>}/>
              </Routes>
              <Routes>
                  <Route path="/diary/:id" element={<Diary/>}/>
              </Routes>
              <RouteTest/>
          </div>
      </BrowserRouter>
  );
}

export default App;
