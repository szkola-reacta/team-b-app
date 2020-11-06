import './App.css';
import { VideoList } from './components/VideoList';

import { Video } from './components/Video';
import { movies } from './api/db.json';
import { VideoList } from './components/VideoList';

function App() {
  return (
    <div className="App">
      test - Video component
      <Video maxWidth="600" video={movies[0]} />
    </div>
  );
}

export default App;