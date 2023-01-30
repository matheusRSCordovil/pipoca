/* eslint-disable react-hooks/exhaustive-deps */
import { MainContainer } from "./styles";
import MenuIcon from "../../assets/img/menuIcon.png";
// import NotificationOnIcon from "../../assets/img/notificationOnIcon.png";
import LogoAada from "../../assets/img/logo-aada.png";
import { useLocation } from "react-router-dom";
import { useHomeProvider } from "../../providers/HomeProvider";
import CloseIcon from "../../assets/img/closeIcon.png";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";

const TopMenu = () => {
  const location = useLocation();

  const { ativo, setOpenMenu, openMenu, userNome, setUserNome } =
    useHomeProvider();

  useEffect(() => {
    if (userNome === "") {
      let decoded: any = "";
      let token = localStorage.getItem("token");
      if (token) {
        decoded = jwt_decode(localStorage.getItem("token") || "");
      }
      setUserNome(decoded.unique_name);
    }
  }, []);

  return location.pathname === "/" ? (
    <MainContainer>
      {ativo === "relatorio" && !openMenu ? (
        <p>Relatório</p>
      ) : !openMenu ? (
        // <p>Bom dia, {userNome}!</p>
        <p>Registro da jornada</p>
      ) : null}

      {/* <img
        src={NotificationOnIcon}
        alt="notificationOnIcon"
        className="notificationOnIcon"
      /> */}

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

      {!openMenu && <img src={LogoAada} alt="logoAada" className="logoAada" />}
    </MainContainer>
  ) : null;
};

export default TopMenu;
