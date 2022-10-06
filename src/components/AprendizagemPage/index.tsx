import { MainContainer } from "./styles";
import PlusIcon from "../../assets/icon/hojeIcons/plus.png";
import Carrossel from "../Carrossel";
import { useHomeProvider } from "../../providers/HomeProvider";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";

const AprendizagemPage = () => {
  const { openFilterMenu, setOpenFilterMenu } = useHomeProvider();

  return (
    <MainContainer>
      <div
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <img
          onClick={() => setOpenFilterMenu(!openFilterMenu)}
          src={FiltroIcon}
          alt="Depoimentos"
          style={{ width: 26, height: 26 }}
        />
      </div>
      <p className="aprendizagem-do-dia-text">Aprendizagem do dia</p>

      <div className="aprendizagem-card">
        <h4>Um banho morno para começar bem o dia!</h4>
        <p>
          Você sabia que o banho morno e rápido pode te ajudar a controlar as
          irritações da pele? Clique aqui pra ler mais sobre.
        </p>
        <img src={PlusIcon} alt="plusIcon" className="plus-icone" />
      </div>

      <input type="text" className="pesquisa-input" />

      <p
        className="aprendizagem-do-dia-text"
        style={{ marginBottom: 0, marginTop: 0 }}
      >
        Para quem começou esta jornada
      </p>
      <Carrossel />

      <p className="aprendizagem-do-dia-text" style={{ marginBottom: 0 }}>
        Para quem já entende de DA
      </p>
      <Carrossel />

      <p className="aprendizagem-do-dia-text" style={{ marginBottom: 0 }}>
        Conhecimento avançado
      </p>
      <Carrossel />
    </MainContainer>
  );
};

export default AprendizagemPage;
