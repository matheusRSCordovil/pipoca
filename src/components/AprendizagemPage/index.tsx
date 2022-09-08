import { MainContainer } from "./styles";
import PlusIcon from "../../assets/icon/hojeIcons/plus.png";

const AprendizagemPage = () => {
  return (
    <MainContainer>
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
    </MainContainer>
  );
};

export default AprendizagemPage;
