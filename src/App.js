import React from 'react';
import './App.css';

import CountButton from './blog/stateInReact';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <h1>The Road To React</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>Searching for <strong>{searchTerm}</strong>.</p>

      <br /><br /><br />

      <CountButton />

    </div>
  );
}

export default App;
