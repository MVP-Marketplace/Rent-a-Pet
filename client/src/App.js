import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import SignUp from "./components/SignUp";
// import Login from "./components/Login";
import Home from "./pages/homepage";
import HumanProfile from "./pages/humanProfile";
import FeedPage from "./pages/feedpage";
// import { AuthProvider } from "./Auth";
// import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/profile" component={HumanProfile} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

// const  App = () => {
//   return (
//     <AuthProvider>
//     <Router>
//       <div>
//         <PrivateRoute exact path="/" component={Home} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={SignUp} />
//       </div>
//     </Router>
//     </AuthProvider>
//   );
// };

export default App;
