import { MainContainer } from "./styles";
import PlusIcon from "../../assets/icon/hojeIcons/plus.png";
import Carrossel from "../Carrossel";
import { useHomeProvider } from "../../providers/HomeProvider";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { useEffect, useState } from "react";
import API from "../../services";

const AprendizagemPage = () => {
  const {
    openFilterMenu,
    setOpenFilterMenu,
    filtrosAtivos,
    setIdAtivo,
    setAtivo,
  } = useHomeProvider();

  const [conteudos, setConteudos] = useState<any>([]);
  const [titulos, setTitulos] = useState<string>("");

  const handleClick = (index: number) => {
    setIdAtivo(index + "");
    setAtivo("detalhes");
  };

  useEffect(() => {
    API.get("Conteudo?CategoriaId=1").then((response) => {
      let index = Math.floor(Math.random() * response.data.length - 1);
      setConteudos(response.data[index]);
    });
  }, []);

  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);

  useEffect(() => {
    API.get(`Conteudo?NivelId=1${filtrosAtivos}`).then((response) => {
      setLevel1(response.data.slice(0, 4));
    });

    API.get(`Conteudo?NivelId=2${filtrosAtivos}`).then((response) => {
      setLevel2(response.data.slice(0, 4));
    });

    API.get(`Conteudo?NivelId=3${filtrosAtivos}`).then((response) => {
      setLevel3(response.data.slice(0, 4));
    });
  }, [filtrosAtivos]);

  useEffect(() => {
    const getData = setTimeout(() => {
      API.get(`Conteudo?NivelId=1${filtrosAtivos}&Titulos=${titulos}`).then(
        (response) => {
          setLevel1(response.data.slice(0, 4));
        }
      );

      API.get(`Conteudo?NivelId=2${filtrosAtivos}&Titulos=${titulos}`).then(
        (response) => {
          setLevel2(response.data.slice(0, 4));
        }
      );

      API.get(`Conteudo?NivelId=3${filtrosAtivos}&Titulos=${titulos}`).then(
        (response) => {
          setLevel3(response.data.slice(0, 4));
        }
      );
    }, 2000);

    return () => clearTimeout(getData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titulos]);

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
        <h4>{conteudos && conteudos.titulo}</h4>
        <p>{conteudos && conteudos.resumo}</p>
        <img
          src={PlusIcon}
          alt="plusIcon"
          className="plus-icone"
          onClick={() => handleClick(conteudos.id)}
        />
      </div>

      <input
        type="text"
        className="pesquisa-input"
        onChange={(e) => setTitulos(e.target.value)}
      />

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
