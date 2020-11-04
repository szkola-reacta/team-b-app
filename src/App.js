import logo from './logo.svg';
import "./App.css";

import { Video } from './components/Video';
import { movies } from './api/db.json';

function App() {
  return (
    <div className="App">
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
        <Video maxWidth="600" video={movies[0]} />
      </header>
    </div>
  );
}

export default App;
