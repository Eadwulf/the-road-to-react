import React from 'react';
import '../App.css';

const CountButton = () => {
  const [count, setCount] = React.useState(0);

  function handleIncreaseButton() {
    setTimeout(() => setCount(state => state + 1), 1000);
  }

  function handleDecreaseButton() {
    setTimeout(() => setCount(state => state - 1), 1000);
  }

  return (
    <div>
      <h1>Counter Buttons</h1>
      <hr /> <br />

      <p>Count: {count}</p>

      <button type="button" onClick={handleIncreaseButton}>
        Increase
      </button>

      <button type="button" onClick={handleDecreaseButton}>
        Decrease
      </button>

    </div>
  );
}

export default CountButton;
