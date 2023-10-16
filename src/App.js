
import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Home from "./Componetes/Home";
import PaginaChat from "./Componetes/PaginaChat";

function App() {
  return(
      <Router>
        <div className="App">
          <Routes>
            <Route path='/chatpagina' element={<PaginaChat/>}/>
              <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </Router>

);
}

export default App;
