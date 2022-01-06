import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/header/Navbars';

function App() {
  return (
    <Router>
      <Navbars />
    </Router>
  );
}

export default App;
