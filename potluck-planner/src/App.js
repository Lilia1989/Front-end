import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Component/Navigation/Nav";
import Home from "./Component/Homepage/Home";
import SignupForm from "./Component/Register/SignUpForm";
import LogInForm from "./Component/Register/LoginForm";
import { PrivateRoute } from "./Component/Helpers/protectedRoute";
import UserProfile from "./Component/UserProfile/UserProfile";
import UpdateProfile from "./Component/UserProfile/UpdateProfile";
import EditItem from "./Component/Items/EditItem";
import ItemsList from "./Component/Items/ItemList";
import { ItemContext } from "./Component/Contexts/ItemContext";
function App() {
  const [itemList, setItemList] = useState([]);
  return (
    <ItemContext.Provider value={{ itemList, setItemList }}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-up" component={SignupForm} />
          <Route path="/sign-in" component={LogInForm} />
          <PrivateRoute exact path="/my-Potluck" component={ItemsList} />
          <PrivateRoute exact path="/edit-item/:id" component={EditItem} />
          <PrivateRoute path="/my-profile" component={UserProfile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
        </Switch>
      </Router>
    </ItemContext.Provider>
  );
}
export default App;