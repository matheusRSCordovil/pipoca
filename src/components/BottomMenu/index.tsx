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
  const { ativo, setAtivo, setOpenMenu } = useHomeProvider();
  const location = useLocation();

  const handleClick = (e: string) => {
    setAtivo(e);
    setOpenMenu(false);
  };

  return location.pathname === "/" ? (
    <MainContainer>
      {ativo === "hoje" ? (
        <img className="img ativo" alt="" src={HojeAtivo} />
      ) : (
        <img alt="" src={HojeIcon} onClick={() => handleClick("hoje")} />
      )}

      {ativo === "registro" ? (
        <img className="img ativo" alt="" src={RegistroAtivo} />
      ) : (
        <img
          alt=""
          src={RegistroIcon}
          onClick={() => handleClick("registro")}
        />
      )}
      {ativo === "relatorio" ? (
        <img className="img ativo" alt="" src={RelatorioAtivo} />
      ) : (
        <img
          alt=""
          src={RelatorioIcon}
          onClick={() => handleClick("relatorio")}
        />
      )}
    </MainContainer>
  ) : null;
};

export default BottomMenu;
