import { MainContainer } from "./styles";
import PlusIcon from "../../assets/icon/hojeIcons/plus.png";
import Carrossel from "../Carrossel";
import { useHomeProvider } from "../../providers/HomeProvider";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { useEffect, useState } from "react";
import API from "../../services";

const AprendizagemPage = () => {
  const { openFilterMenu, setOpenFilterMenu, filtrosAtivos } =
    useHomeProvider();

  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);

  useEffect(() => {
    API.get(`Conteudo?NivelId=1${filtrosAtivos}`).then((response) => {
      setLevel1(response.data);
    });

    API.get(`Conteudo?NivelId=2${filtrosAtivos}`).then((response) => {
      setLevel2(response.data);
    });

    API.get(`Conteudo?NivelId=3${filtrosAtivos}`).then((response) => {
      setLevel3(response.data);
    });
  }, [filtrosAtivos]);

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

      {level1.length && (
        <>
          {" "}
          <p
            className="aprendizagem-do-dia-text"
            style={{ marginBottom: 0, marginTop: 0 }}
          >
            Para quem começou esta jornada
          </p>
          <Carrossel data={level1} showPlus={true} />
        </>
      )}

      {level2.length && (
        <>
          <p className="aprendizagem-do-dia-text" style={{ marginBottom: 0 }}>
            Para quem já entende de DA
          </p>
          <Carrossel data={level2} showPlus={true} />
        </>
      )}

      {level3.length && (
        <>
          {" "}
          <p className="aprendizagem-do-dia-text" style={{ marginBottom: 0 }}>
            Conhecimento avançado
          </p>
          <Carrossel data={level3} showPlus={true} />
        </>
      )}
    </MainContainer>
  );
};

export default AprendizagemPage;
