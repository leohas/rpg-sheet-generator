import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
