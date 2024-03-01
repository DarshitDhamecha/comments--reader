import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Route, Routes } from 'react-router';
import User from './components/User';

export default class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route path='/' element={<News />}></Route>
          <Route path='/user' element={<User />}></Route>
        </Routes>
      </>
    )
  }
}
