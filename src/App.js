import React, { useEffect } from "react";
import "./styles.css";
import Header from "./Components/Header";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import routes from "./routes/routes";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import NewPost from "./pages/NewPost";
import ErrorBoundary from "./Components/ErrorBoundary";


export default function App() {
  const history = useHistory();
  const location = useLocation();
  const { setAdminLoggedIn } = useAdminProvider();

  useEffect(() => {
    if (location.pathname === "/") {
      history.push(routes.home);
    }

    adminRequests("https://ei0ci.sse.codesandbox.io/admin/isLoggedIn")
      .then(() => {
        setAdminLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={routes.home}>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </Route>
        <Route path={routes.authors}>
          <h3>Authors</h3>
          <h3>Author's page coming soon!!</h3>
        </Route>
        <Route path={routes.newPost}>
          <NewPost />
        </Route>
        <Route path={routes.post}>
          <PostPage />
        </Route>
        <Route path={routes.adminLogin}>
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}
