import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [feedback, setFeedback] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => { setNumber(Math.floor(Math.random()*100)); }, 10000);
    return(() => clearInterval(timer));
  }, []);

  useEffect(() => {
    if(number % 3 === 0 || number % 5 === 0) {
      setFeedback(true);
      setTimeout(() => { setFeedback(false); }, 4000 );
    }

  }, [number]);

  return (
    <div>
      {number}
      {feedback && <p>Acerto</p>}
    </div>
  );
};

export default Counter;