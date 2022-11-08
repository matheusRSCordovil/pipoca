import "./App.css";
import Routing from "./routes";
import BottomMenu from "./components/BottomMenu";
import GlobalContext from "./providers";
import TopMenu from "./components/Topmenu";
import PwaPopup from "./components/PwaIphonePopup";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <>{serviceWorkerRegistration.register()}</>
        <PwaPopup />
        <TopMenu />
        <header className="App-header">
          <Routing />
        </header>
        <BottomMenu />
      </div>
    </GlobalContext>
  );
}

export default App;
