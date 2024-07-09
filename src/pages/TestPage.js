import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TestPage = () => {
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    if (timer === 0) {
      navigate('/results');
    }

    return () => clearInterval(countdown);
  }, [timer, navigate]);

  const handleNext = () => {
    navigate('/test2');
  };

  const handleExit = () => {
    navigate('/login');
  };

  return (
    <div className="test-body">
      <div className="question-section">
        <h2>Question 1 of 3</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ul>
          <li>
            <input type="radio" id="option1" name="answer" />
            <label htmlFor="option1">Lorem ipsu</label>
          </li>
          <li>
            <input type="radio" id="option2" name="answer" />
            <label htmlFor="option2">Lorem ipsu</label>
          </li>
          <li>
            <input type="radio" id="option3" name="answer" />
            <label htmlFor="option3">Lorem ipsu</label>
          </li>
          <li>
            <input type="radio" id="option4" name="answer" />
            <label htmlFor="option4">Lorem ipsu</label>
          </li>
        </ul>
        <div className="navigation-buttons">
          <button onClick={handleExit}>Exit</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="notepad-section">
        <h2>Notepad</h2>
        <textarea
          placeholder="Scribble your notes here ..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TestPage;
