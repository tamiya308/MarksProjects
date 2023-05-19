import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';

const ExampleComponent = React.lazy(() => import('./ExampleComponent'));

function App() {
  // function loadExampleComponent() {
    // alert('Loading example component!');
  // }

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <ExampleComponent></ExampleComponent>
        <ExampleComponent2></ExampleComponent2>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <button onClick={loadExampleComponent}>Load Component</button>; */}
      </Suspense>
    </div>
  );
}

export default App;
