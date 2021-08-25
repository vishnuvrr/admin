import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import User from "./components/User/User";
import EditUser from "./components/User/EditUser"
import CreateUser from "./components/User/CreateUser";
import Products from "./components/Products/Products";
import CreateProduct from "./components/Products/CreateProduct";
import EditProduct from "./components/Products/EditProduct";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { UserProvider } from "./components/User/userContext";



function App() {
  return (
    <div id="wrapper">
      <Router>
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>

              <UserProvider>
              <Route exact path="/users">
                <User />
              </Route>
              <Route exact path="/users/create">
                <CreateUser/>
              </Route>
              <Route exact path="/users/edit/:id">
                <EditUser/>
              </Route>
              <Route exact path="/products">
                <Products/>
              </Route>
              <Route exact path="/products/create">
                <CreateProduct/>
              </Route>
              <Route exact path="/products/edit/:id">
                <EditProduct/>
              </Route> 
              </UserProvider>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
