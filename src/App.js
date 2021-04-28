import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "./DashBoard";
import HeaderComp from "./routes/header/HeaderComp";
import CourseScreen from "./routes/courses/CourseScreen";


const App = () => {
  return (
    <AuthProvider>
      <Router>

        
        <div className="App">
        <HeaderComp />
           <Route exact path = "/" component={Home} />
          <PrivateRoute exact path="/DashBoard" component={DashBoard} />
          <Route exact path="/CourseScreen" component={CourseScreen} />
          
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
