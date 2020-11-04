import "./App.css";

import { Video } from './components/Video';
import { movies } from './api/db.json';



function App() {

  return (
    <div>
      <Video maxWidth="600" video={movies[0]} />
    </div>
  );
}

export default App;
