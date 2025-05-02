import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Quiz from './components/Quiz/Quiz'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/quiz' element = {<Quiz/>}/>
      </Routes>
    </Router>
    </>
  );
};

export default App;