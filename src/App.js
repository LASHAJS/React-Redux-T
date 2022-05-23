import React from "react";
import { Route,Switch ,Redirect} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Add from "./components/AddContact";
import Edit from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Auth from "../src/components/Auth/login"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./styles.css";

const App = () => {
  const isLoading  = useSelector(state => state.auth.isLoading);
  const isAuth = localStorage.getItem("jwt")
  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])
  if (isLoading){
      return <div>Loading...</div>
  }
      return (
          <div className="App">
              <ToastContainer/>
              <Navbar/>
              {!isAuth
                  ? <Switch>
                  <Route exact path="/Auth" component={() => <Auth/>}/>
                  <Redirect to="/Auth"/>
                  </Switch>
                  : <Switch>
                  <Route exact path="/" component={() => <Home/>}/>
                  <Route exact path="/add" component={() => <Add/>}/>
                  <Route exact path="/edit/:id" component={() => <Edit/>}/>
                  <Redirect to="/"/>
                  </Switch>
              }
          </div>
      );
};
export default App;
