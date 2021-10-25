import React, { FC } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from "pages/Index/Index";

const App: FC = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Index} />
      </Router>
    </>
  );
};
export default App;
