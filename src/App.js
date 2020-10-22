import React from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from '../components/Playlist'
import Favorites from '../components/Favorites'
import Form from '../components/Form'
import Header from '../components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <Playlist />
      <Favorites />
      <Form />
    </div>
  );
}

export default App;
