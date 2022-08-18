import { MainContainer } from "./styles";
import RelatorioIcon from "../../assets/img/relatorio.png";
import HojeIcon from "../../assets/img/hoje.png";
import RegistroIcon from "../../assets/img/registro.png";
import HojeAtivo from "../../assets/img/hojeAtivo.png";
import RegistroAtivo from "../../assets/img/registroAtivo.png";
import RelatorioAtivo from "../../assets/img/relatorioAtivo.png";
import { useHomeProvider } from "../../providers/HomeProvider";
import { useLocation } from "react-router-dom";

const BottomMenu = () => {
  const { ativo, setAtivo } = useHomeProvider();
  const location = useLocation();

  return location.pathname === "/" ? (
    <MainContainer>
      {ativo === "relatorio" ? (
        <img
          style={{ position: "relative", bottom: "18px" }}
          alt=""
          src={RelatorioAtivo}
          onClick={() => setAtivo("")}
        />
      ) : (
        <img alt="" src={RelatorioIcon} onClick={() => setAtivo("relatorio")} />
      )}

      {ativo === "hoje" ? (
        <img
          style={{ position: "relative", bottom: "18px" }}
          alt=""
          src={HojeAtivo}
          onClick={() => setAtivo("")}
        />
      ) : (
        <img alt="" src={HojeIcon} onClick={() => setAtivo("hoje")} />
      )}

      {ativo === "registro" ? (
        <img
          style={{ position: "relative", bottom: "18px" }}
          alt=""
          src={RegistroAtivo}
          onClick={() => setAtivo("")}
        />
      ) : (
        <img alt="" src={RegistroIcon} onClick={() => setAtivo("registro")} />
      )}
    </MainContainer>
  ) : null;
};

export default BottomMenu;
