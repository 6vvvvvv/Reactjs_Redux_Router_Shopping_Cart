import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
// import Login from "./components/auth/Login";
// import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            {/* <Route path="/login" component={Login} /> */}
             {/* <Route path="/signup" component={Signup} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;