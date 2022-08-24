import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routes";
import BottomMenu from "./components/BottomMenu";
import GlobalContext from "./providers";
import TopMenu from "./components/Topmenu";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <div className="App">
          <TopMenu />
          <header className="App-header">
            <Routing />
          </header>
          <BottomMenu />
        </div>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
