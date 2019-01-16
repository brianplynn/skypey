import React, { Component } from 'react';
import Sidebar from "../components/Sidebar.js"
import Main from "../components/Main.js";
import store from "../store";
import './App.css';
import _ from "lodash";

const App = () => {
  const { contacts } = store.getState();
    return (
      <div className="App">
       <Sidebar contacts={_.values(contacts)}/>
       <Main />
      </div>      
    )
}

export default App;
