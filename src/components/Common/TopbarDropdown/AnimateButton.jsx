import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimateButton.css';

const AnimateButton = () => {
  const [isanimate, setIsanimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsanimate(prev => !prev);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    navigate('/createticket');
  };

  return (
    <button
      className={`animate-button ${
        isanimate ? "animate" : ""
      }  justify-content-center align-items-center d-none d-md-flex`}
      onClick={handleClick}
    >
      <i
        className="fas fa-ticket-alt me-2"
        style={{ color: "#512da8", fontSize: "1rem" }}
      />{" "}
      Create Ticket
    </button>
  );
};

export default AnimateButton;
