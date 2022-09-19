import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { FormContainer } from "./styles";

const MenuPageConfig = ({ ...props }: { handleSelect: any }) => {
  const [select, setSelect] = useState("");

  return (
    <List style={{ marginTop: 161, height: "90%" }}>
      <ListItem
        button
        style={{
          background: "#fff",
          boxShadow: "0px 4px 4px 0px #00000026",
          height: select === "conta" ? 347 : 44,
          textAlign: "center",
        }}
        onClick={() => setSelect("conta")}
      >
        {select === "conta" ? (
          <FormContainer>
            <h4>Minha Conta</h4>
            <form>
              <label htmlFor="name">Nome:&nbsp;</label>
              <input type="text" />
              <label htmlFor="email">E-mail: </label>
              <input type="email" />
              <label htmlFor="password">Mudar minha senha: </label>
              <input type="password" />
            </form>
          </FormContainer>
        ) : (
          <ListItemText primary="Minha conta" />
        )}
      </ListItem>

      <Divider />

      <ListItem
        button
        style={{
          background: "#fff",
          boxShadow: "0px 4px 4px 0px #00000026",
          height: 44,
          textAlign: "center",
        }}
        onClick={() => setSelect("")}
      >
        <ListItemText primary="Configurações da jornada" />
      </ListItem>
    </List>
  );
};

export default MenuPageConfig;
