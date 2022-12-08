import "./App.css";
import Routing from "./routes";
import BottomMenu from "./components/BottomMenu";
import GlobalContext from "./providers";
import TopMenu from "./components/Topmenu";
import PwaPopup from "./components/PwaIphonePopup";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { useEffect, useState, Fragment } from "react";
import { withSnackbar, useSnackbar } from "notistack";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function App() {
  // const { enqueueSnackbar } = useSnackbar();

  // const [waitingWorker, setWaitingWorker] = useState<any>({});
  // const [newVersionAvailable, setNewVersionAvailable] =
  //   useState<boolean>(false);

  // const onServiceWorkerUpdate = (registration: { waiting: any }) => {
  //   setWaitingWorker(registration && registration.waiting);
  //   setNewVersionAvailable(true);
  // };

  // const updateServiceWorker = () => {
  //   waitingWorker && waitingWorker.postMessage({ type: "SKIP_WAITING" });
  //   setNewVersionAvailable(false);

  //   window.location.reload();
  // };

  // const refreshAction = (_key: any) => {
  //   //render the snackbar button
  //   return (
  //     <Fragment>
  //       <Button
  //         className="snackbar-button"
  //         size="small"
  //         onClick={updateServiceWorker}
  //       >
  //         {"refresh"}
  //       </Button>
  //     </Fragment>
  //   );
  // };

  // useEffect(() => {
  //   if (process.env.NODE_ENV === "production") {
  //     serviceWorkerRegistration.register({
  //       onUpdate: onServiceWorkerUpdate,
  //     });
  //   }

  //   if (newVersionAvailable) {
  //     enqueueSnackbar("A new version was released", {
  //       persist: true,
  //       variant: "success",
  //       // @ts-ignore
  //       // action: refreshAction(),
  //     });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   console.log("newVersionAvailable", newVersionAvailable);
  // }, [newVersionAvailable]);

  return (
    <GlobalContext>
      <div className="App">
        <ToastContainer />
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
