import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Kosodate from "./components/KosodateMap";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/map/kosodate" component={Kosodate} />
        <Link to="/map/kosodate">子育てマップ</Link>
      </Router>
    </div>
  );
};
export default App;
