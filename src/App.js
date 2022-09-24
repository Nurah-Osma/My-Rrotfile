
import './App.css';
import ScrollToTop from "react-scroll-to-top";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './componetns/Home';
import Contact from './componetns/Contact';

import Project from './componetns/Project'
import Login from './componetns/Login';


function App() {
  
  return (
    <div className="App">
       <ScrollToTop />
<BrowserRouter>
    <Routes>
    <Route>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
