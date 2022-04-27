import React from "react";
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import Home from "./containers/Home/Index";
import Signin from "./containers/Signin/Signin";
import Signup from "./containers/Signup/Signup";
import "./App.css";





function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
