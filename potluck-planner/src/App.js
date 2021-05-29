import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import Home from "./Components/Homepage/Home";
import SignupForm from "./Components/Register/SignUpForm";
import LogInForm from "./Components/Register/LoginForm";
import { PrivateRoute } from "./Components/Helpers/protectedRoute";
import UserProfile from "./Components/UserProfile/UserProfile";
import UpdateProfile from "./Components/UserProfile/UpdateProfile";
import ItemForm from "./Components/Items/ItemForm";
import ItemsList from "./Components/Items/ItemsList";
import { ItemContext } from "./Components/Contexts/ItemContext";
import ItemCard from "./Components/Items/ItemCard";
function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <ItemContext.Provider value={{ itemList, setItemList }}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignupForm} />
          <Route path="/sign-in" component={LogInForm} />
          <PrivateRoute exact path="/organizer" component={ItemForm} />
          <PrivateRoute exact path="/my-Potluck" component={ItemsList} />
          <PrivateRoute exact path="/add_dish/:id" component={ItemCard} />
          <PrivateRoute path="/my-profile" component={UserProfile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </ItemContext.Provider>
  );
}
export default App;