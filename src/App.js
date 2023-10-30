import "typeface-raleway"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home"
import Header from './components/Header';
import './index.css';


export default function App() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    );
}