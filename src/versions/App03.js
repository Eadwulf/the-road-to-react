import React from 'react';

const title = 'React';

function App3() {
  return (
    <div>
      <h1>Hello, {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App3;
