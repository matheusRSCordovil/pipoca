import * as React from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Slide from "@mui/material/Slide";
import TopMenu from "../Topmenu";
import BgMenu from "../../assets/img/group457.png";
import BottomMenu from "../BottomMenu";
import { useHomeProvider } from "../../providers/HomeProvider";

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

  const { setAtivo, setOpenMenu } = useHomeProvider();

  const handleClick = (e: string) => {
    setAtivo(e);
    setOpenMenu(false);
  };

  const [select, setSelect] = React.useState("");

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
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

        <List style={{ marginTop: 161, height: "90%" }}>
          <ListItem
            button
            style={{
              boxShadow: "0px 4px 4px 0px #00000026",
              height: 44,
              textAlign: "center",
            }}
            onClick={() => handleClick("relatorio")}
          >
            <ListItemText primary="Relatório" />
          </ListItem>
          <Divider />
          <ListItem
            button
            style={{
              boxShadow: "0px 4px 4px 0px #00000026",
              height: 44,
              textAlign: "center",
            }}
            onClick={() => handleClick("aprendizagem")}
          >
            <ListItemText primary="Conteúdos de aprendizagem" />
          </ListItem>
          <Divider />
          <ListItem
            button
            style={{
              boxShadow: "0px 4px 4px 0px #00000026",
              height: 44,
              textAlign: "center",
            }}
            onClick={() => handleClick("registro")}
          >
            <ListItemText primary="Meus registros" />
          </ListItem>
          <Divider />
          <ListItem
            button
            style={{
              boxShadow: "0px 4px 4px 0px #00000026",
              height: 44,
              textAlign: "center",
            }}
            onClick={() => setSelect("config")}
          >
            <ListItemText primary="Configurações" />
          </ListItem>
        </List>
        <BottomMenu />
      </Dialog>
    </div>
  );
}
