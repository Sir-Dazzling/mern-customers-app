import React from "react";
import Router from "./Router";
import axios from "axios";
import { AuthContextProvider } from "./context/AuthContext";
import "./styles/styles.css";


axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <h2 className="text-red-600">this is me</h2>
    </div>
    // <AuthContextProvider>
    //   <Router />
    // </AuthContextProvider>
  );
}

export default App;
