import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const ResultPage = () => {
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
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

  const chartDataFinalScore = {
    datasets: [
      {
        data: [80, 20], // Example values for final score, adjust as needed
        backgroundColor: ['#2196f3', '#bbdefb'],
        borderWidth: 1,
      },
    ],
  };

  const chartDataCorrect = {
    datasets: [
      {
        data: [350, 50], // Example values for correct answers, adjust as needed
        backgroundColor: ['#2196f3', '#bbdefb'],
        borderWidth: 1,
      },
    ],
  };

  const chartDataWrong = {
    datasets: [
      {
        data: [30, 30], // Example values for wrong answers, adjust as needed
        backgroundColor: ['#2196f3', '#bbdefb'],
        borderWidth: 1,
      },
    ],
  };

  const chartDataSkipped = {
    datasets: [
      {
        data: [20, 80], // Example values for skipped answers, adjust as needed
        backgroundColor: ['#2196f3', '#bbdefb'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      datalabels: {
        color: '#fff',
        formatter: (value, context) => {
          return `${value}%`;
        },
        anchor: 'center',
        align: 'center',
        offset: -10,
        font: {
          weight: 'bold',
          size: '16',
        },
      },
    },
  };

  const handleExit = () => {
    navigate('/login');
  };

  return (
    <div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <div>
            <p>Score : 350/400</p>
            <p>Time Taken : 04:20</p>
            <h1 className="score">80%</h1>
            <h3 className="score">Total Score</h3>
          </div>
          <div style={{ width: '150px', height: '150px', display: 'inline-block', textAlign: 'center' }}>
  <Doughnut data={chartDataFinalScore} options={chartOptions} />
  <p>Final Score</p>
</div>

          <div style={{ width: '150px', height: '150px', display: 'inline-block', textAlign: 'center'  }}>
            <Doughnut data={chartDataCorrect} options={chartOptions} />
            <p>Correct</p>
          </div>
          <div style={{ width: '150px', height: '150px', display: 'inline-block', textAlign: 'center'  }}>
            <Doughnut data={chartDataWrong} options={chartOptions} />
            <p>Wrong</p>
          </div>
          <div style={{ width: '150px', height: '150px', display: 'inline-block', textAlign: 'center'  }}>
            <Doughnut data={chartDataSkipped} options={chartOptions} />
            <p>Skipped</p>
          </div>
        </div>
        <div className="test-body">
        <div className="question-section">
        <h2>Your scribble notes:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl vitae purus facilisi id. Blandit saggittis commodo, urna
          ut mattis vestibulum non. Vel sed scelerisque leo quis in mqattis ultrices alquam. justio,Lorem ivp
        </p>
        </div>
       
        </div>
        <div className="navigation-buttons" style={{ marginLeft:700}}>
          <button onClick={handleExit}>Exit</button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
