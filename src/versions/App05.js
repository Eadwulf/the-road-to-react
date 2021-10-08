function getTitle(title) {
  return title;
}

function App05() {
  return (
    <div>
      <h1>Hello, {getTitle('React')}</h1>

      <label htmlFor="Search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App05;
