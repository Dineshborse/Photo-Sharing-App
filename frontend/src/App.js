import React from 'react';
import PagePostview from './components/PagePostview';
import LandingPage from './components/LandingPage';
import PostForm from './components/postform';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"

function App(Props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} ></Route>
        <Route path='/postview' element={<PagePostview />} ></Route>
        <Route path='/postform' element={<PostForm />} ></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
