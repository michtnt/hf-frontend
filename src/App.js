import React from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";

import Recipe from "./views/Recipe";
import Login from "./views/Login";
import Register from "./views/Register";
import RecipeForm from "./views/Recipe/component/recipeForm";
import Menu from "./views/Menu";
import MenuForm from "./views/Menu/component/menuForm";

function App() {
  const isLoggedIn = localStorage.getItem("hf-frontend@token");

  return (
    <Router>
      <Switch>
        {/* render login first, but could be better way */}
        <Route exact path={"/login"} component={Login} />
        {routes.map((route, i) => {
          const Component = route.component;
          return (
            <Route
              key={`router${i}`}
              path={route.path}
              exact={route.exact}
              render={(props) =>
                isLoggedIn || !route.needAuth ? (
                  <Component {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          );
        })}
      </Switch>
    </Router>
  );
}

const routes = [
  {
    exact: true,
    path: "/",
    component: Recipe,
    needAuth: true,
  },
  {
    exact: true,
    path: "/register",
    component: Register,
    needAuth: false,
  },

  {
    exact: true,
    path: "/recipe",
    component: Recipe,
    needAuth: true,
  },
  {
    exact: true,
    path: "/recipe/:type/:id",
    component: RecipeForm,
    needAuth: true,
  },
  {
    exact: true,
    path: "/menu",
    component: Menu,
    needAuth: true,
  },
  {
    exact: true,
    path: "/menu/:type/:id",
    component: MenuForm,
    needAuth: true,
  },
];

export default App;
