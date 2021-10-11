import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomVideos from "./RecomVideos";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Search from "./Search";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:inputSearch">
            <div className="app__page">
              <Sidebar />
              <Search />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecomVideos />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
