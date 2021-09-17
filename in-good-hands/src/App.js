import "./scss/main.scss"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Login from "./components/Login";
import Register from "./components/Register";
import GiveBack from "./components/GiveBack";



function App() {
  return (
      <>
          <div className={"container"}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/give-back" component={GiveBack} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </BrowserRouter>
          </div>
      </>

  );
}

export default App;
