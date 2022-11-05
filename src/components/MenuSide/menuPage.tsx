import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useHomeProvider } from "../../providers/HomeProvider";

const MenuPage1 = ({ ...props }: { handleSelect: any }) => {
  const { setAtivo, setOpenMenu } = useHomeProvider();

  const { handleSelect } = props;

  const handleClick = (e: string) => {
    setAtivo(e);
    setOpenMenu(false);
  };

  return (
    <List style={{ marginTop: 161, height: "90%" }}>
      <ListItem
        button
        style={{
          boxShadow: "0px 4px 4px 0px #00000026",
          height: 44,
          textAlign: "center",
          backgroundColor: "#ffffff",
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
          backgroundColor: "#ffffff",
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
          backgroundColor: "#ffffff",
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
          backgroundColor: "#ffffff",
        }}
        onClick={() => handleSelect("config")}
      >
        <ListItemText primary="Configurações" />
      </ListItem>
    </List>
  );
};

export default MenuPage1;
