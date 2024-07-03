

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        </Router>
  );
}

export default App;
