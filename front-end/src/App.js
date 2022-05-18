import { Route, Switch } from "react-router-dom";
import Homepage from "./Components/HomePage/Header";
import Login from "./Components/Login";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    </>
  );
}

export default App;
