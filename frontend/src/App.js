import React, {Component} from 'react';
import Login from './view/Login'
import Signup from './view/Signup'
import Header from './view/Header'
import Main from './view/Main'
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import MyAccount from "./view/MyAccount";
import FeverStart from "./view/FeverStart";
import FeverMode from "./view/FeverMode";
import FeverEnd from "./view/FeverEnd";
import MyData from "./view/MyData";
import Friends from "./view/Friends";

export default class App extends Component {
  render(){
    return(
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <Route exact path="/" component={Main}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/myaccount" component={MyAccount}/>
                <Route path="/feverstart" component={FeverStart}/>
                <Route path="/fevermode" component={FeverMode}/>
                <Route path="/feverend" component={FeverEnd}/>
                <Route path="/mydata" component={MyData}/>
                <Route path="/friends" component={Friends}/>
            </BrowserRouter>
        </div>
    );
  }
}
