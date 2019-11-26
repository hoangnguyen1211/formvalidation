import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SignIn, SignUp } from './components/authen';
import Demo from './components/Demo';
import { HomeTemplate } from './components/HOC/TemplateAdmin';

function App()  {
  return (
    <BrowserRouter>
     
      <Switch>
        <HomeTemplate path="/signin" Component={SignIn}/>
        <HomeTemplate path="/signup" Component={SignUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
