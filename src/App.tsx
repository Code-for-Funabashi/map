import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Kosodate from "./components/KosodateMap";
import Index from "./components/Index";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/map" component={Index} />
        <Route exact path="/map/kosodate" component={Kosodate} />
      </Router>
    </div>
  );
};
export default App;
