import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomVideos from './RecomVideos';

function App() {
  return (
    <div >
        <Header/>
        <div className="app__page">
          <Sidebar/>
          <RecomVideos/>
        </div>
    </div>
  );
}

export default App;
