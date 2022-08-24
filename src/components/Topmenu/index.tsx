import { MainContainer } from "./styles";
import MenuIcon from "../../assets/img/menuIcon.png";
import NotificationOnIcon from "../../assets/img/notificationOnIcon.png";
import LogoAada from "../../assets/img/logo-aada.png";
import { useLocation } from "react-router-dom";

const TopMenu = () => {
  const location = useLocation();
  return location.pathname === "/" ? (
    <MainContainer>
      {/* <img
        src={ClosetIcon}
        alt="close"
        style={{ width: "22px", height: "22px" }}
      /> */}

      <p>Bom dia, Ana!</p>

      <img
        src={NotificationOnIcon}
        alt="notificationOnIcon"
        style={{
          width: "31px",
          height: "36px",
          position: "absolute",
          left: "24px",
          top: "43px",
          cursor: "pointer",
        }}
      />
      <img
        src={MenuIcon}
        alt="menu"
        style={{
          width: "36px",
          height: "18px",
          position: "absolute",
          right: "24px",
          top: "43px",
          cursor: "pointer",
        }}
      />
      <img
        src={MenuIcon}
        alt="menu"
        style={{
          width: "36px",
          height: "18px",
          position: "absolute",
          right: "24px",
          top: "43px",
          cursor: "pointer",
        }}
      />
      <img
        src={LogoAada}
        alt="logoAada"
        style={{
          width: "67px",
          height: "23px",
          position: "absolute",
          right: "14px",
          top: "134px",
          cursor: "pointer",
        }}
      />
    </MainContainer>
  ) : null;
};

export default TopMenu;
