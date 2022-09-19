import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import TopMenu from "../Topmenu";
import BgMenu from "../../assets/img/group457.png";
import BottomMenu from "../BottomMenu";
import MenuPage from "./menuPage";
import MenuPageConfig from "./menuPageConfig";

const Transition = React.forwardRef(function Transition(props, ref) {
  // @ts-ignore
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  ...props
}: {
  open: boolean;
  handleClose: any;
}) {
  const { open, handleClose } = props;

  const [select, setSelect] = React.useState("");

  const handleSelect = (e: string) => {
    setSelect(e);
  };

  const handleModalClose = () => {
    handleClose();
    setSelect("");
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleModalClose}
        // @ts-ignore
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            color: "#7D7D7D",
            backgroundImage: `url(${BgMenu})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            backgroundSize: "contain",
          },
        }}
      >
        <TopMenu />

        {select === "" && <MenuPage handleSelect={handleSelect} />}
        {select === "config" && <MenuPageConfig handleSelect={handleSelect} />}

        <BottomMenu />
      </Dialog>
    </div>
  );
}
