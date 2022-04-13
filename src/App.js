import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";

import AuthProvider from "./context/AuthProvider";
import Register from "./components/Register/Register";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import NewEarring from "./components/NewEarring/NewEarring";
import MyOrders from "./components/MyOrders/MyOrders";
import ManageAllOrders from "./components/ManageAllOrders/ManageAllOrders";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import Pay from "./components/Pay/Pay";
import Review from "./components/Review/Review";
import Dashboard from "./Dashboard/Dashboard";
import Filter from "./components/Filter/Filter";
import Earrings from "./components/Earrings/Earrings";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/earrings">
              <Earrings></Earrings>
            </Route>
            <Route path="/filter">
              <Filter></Filter>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/earring/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/newEarring">
              <NewEarring></NewEarring>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
