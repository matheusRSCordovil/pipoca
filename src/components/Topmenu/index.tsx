import { MainContainer } from "./styles";
import MenuIcon from "../../assets/img/menuIcon.png";
import NotificationOnIcon from "../../assets/img/notificationOnIcon.png";
import LogoAada from "../../assets/img/logo-aada.png";
import { useLocation } from "react-router-dom";
import { useHomeProvider } from "../../providers/HomeProvider";

const TopMenu = () => {
  const location = useLocation();
  const { ativo } = useHomeProvider();

  return location.pathname === "/" ? (
    <MainContainer>
      {/* <img
        src={ClosetIcon}
        alt="close"
        style={{ width: "22px", height: "22px" }}
      /> */}

      {ativo === "relatorio" ? <p>Relatório</p> : <p>Bom dia, Ana!</p>}

      <img
        src={NotificationOnIcon}
        alt="notificationOnIcon"
        className="notificationOnIcon"
      />

      <img src={MenuIcon} alt="menu" className="menu" />

      <img src={LogoAada} alt="logoAada" className="logoAada" />
    </MainContainer>
  ) : null;
};

export default TopMenu;
