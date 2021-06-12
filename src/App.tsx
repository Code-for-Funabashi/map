import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Kosodate from "./components/KosodateMap";

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/kosodate" component={Kosodate} />
        <Link to="/kosodate">子育てマップ</Link>
      </Router>
    </div>
  );
};
export default App;
