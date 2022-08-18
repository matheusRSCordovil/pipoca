import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routing />

          {/* <Calendar /> */}
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
