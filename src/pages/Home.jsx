import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  
  return (
    <div className='home'>
      
      <div className='overlay'>

        <div className='home-content'>
      
          <h1 className='fade-in'> Welcome to the Quiz App</h1>
          <p className='fade-in delay-1'>
            Test your knowledge across tech, general knowledge, and more.<br />
            Learn while having fun with our interactive quizzes!
          </p>
          <button className='start-button fade-in delay-2' onClick={() => navigate('/quiz')}>
            Start Quiz
          </button>
        </div>
        <footer className='footer fade-in delay-3'>
          <p>&copy; 2025 Quiz App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
