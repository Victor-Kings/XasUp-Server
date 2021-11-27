import React from "react";
import "./App.css";
import { UserProvider } from "./context/userContext";
import Main from "./pages/main";


function App() {
  return (
    <UserProvider>
      <Main/>
    </UserProvider>
  );
}

export default App;
