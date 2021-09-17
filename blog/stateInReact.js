import React from 'react';

const countButton = () => {
  const [count, setCount] = React.useState(0);

  function handleButtonEvent() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter Button</h1>
      <button type="button" onClick={handleButtonEvent}>
        Count
      </button>
    </div>
  );
}
