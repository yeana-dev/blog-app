import "./App.css";

import { Route, Switch } from "react-router-dom";
import Posts from "./Screens/Posts/Posts";
import PostDetail from "./Screens/PostDetail/PostDetail";
import PostCreate from "./Screens/PostCreate/PostCreate";
import PostEdit from "./Screens/PostEdit/PostEdit";
import Home from "./Screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route path="/posts/:id" exact component={PostDetail} />
        <Route path="/posts/:id/edit" exact component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
