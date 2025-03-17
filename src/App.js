import React from "react";
import Login from "./Login";
import { analytics } from "./firebase";
import { logEvent } from "firebase/analytics";

logEvent(analytics, "app_opened");


const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default App;
