import { MainContainer } from "./styles";
import MenuIcon from "../../assets/img/menuIcon.png";
import NotificationOnIcon from "../../assets/img/notificationOnIcon.png";
import LogoAada from "../../assets/img/logo-aada.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useHomeProvider } from "../../providers/HomeProvider";
import CloseIcon from "../../assets/img/closeIcon.png";

const TopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { ativo, setOpenMenu, openMenu, setAtivo } = useHomeProvider();

  return location.pathname === "/" ? (
    <MainContainer>
      {ativo === "relatorio" && !openMenu ? (
        <p>Relatório</p>
      ) : !openMenu ? (
        <p>Bom dia, Ana!</p>
      ) : null}

      <img
        src={NotificationOnIcon}
        alt="notificationOnIcon"
        className="notificationOnIcon"
        onClick={() => navigate("/register")}
      />

      {openMenu ? (
        <img
          src={CloseIcon}
          alt="close"
          style={{ width: "22px", height: "22px" }}
          onClick={() => setOpenMenu(false)}
          className="menu"
        />
      ) : (
        <img
          src={MenuIcon}
          alt="menu"
          className="menu"
          onClick={() => setOpenMenu(true)}
        />
      )}

      {!openMenu && (
        <img
          src={LogoAada}
          alt="logoAada"
          className="logoAada"
          onClick={() => setAtivo("depoimentos")}
        />
      )}
    </MainContainer>
  ) : null;
};

export default TopMenu;
