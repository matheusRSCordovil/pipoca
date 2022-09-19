import { MainContainer } from "./styles";

const ProgressoDonePage = () => {
  return (
    <MainContainer>
      <div className="informacao-container">
        <h4>Oba! Você atualizou seu registro!</h4>
        <p>
          Assim conseguimos coletar cada vez mais informações para te conhecer
          melhor e te acompanhar nessa jornada!
        </p>
      </div>
      <a href="/progresso">Calma, ainda quero atualizar meu registro!</a>
    </MainContainer>
  );
};

export default ProgressoDonePage;
