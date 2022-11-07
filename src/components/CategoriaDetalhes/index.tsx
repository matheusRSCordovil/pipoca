import React, { useEffect, useState } from "react";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";
import Carrossel from "../Carrossel";
import { MainContainer } from "./styles";
import BackArrow from "../../assets/img/backArrow.png";

const CategoriaDetalhes = () => {
  const [data, setData] = useState<any>(null);
  const [carrosselData, setCarrosselData] = useState<any>([]);

  const { idAtivo, setAtivo } = useHomeProvider();

  useEffect(() => {
    API.get(`Conteudo`).then((response) => {
      setCarrosselData(response.data);
    });

    API.get(`Conteudo/${idAtivo}`).then((response) => {
      setData(response.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [carrosselData]);

  return (
    <MainContainer>
      <div className="img-box-header">
        <img
          src={BackArrow}
          alt="Imagem"
          style={{ width: 31, height: 31, margin: 4, cursor: "pointer" }}
          onClick={() => setAtivo("aprendizagem")}
        />
      </div>
      <h4>{data?.titulo}</h4>
      <p className="subtitle">
        {data?.autor} •19/01/22 • {data?.duracao} min de duração
      </p>
      <div className="texto-box">
        <p>
          {" "}
          {/* <span>{data?.texto.slice(0, 1)}</span>
          {data?.texto.slice(1, 5000)} */}
          <span dangerouslySetInnerHTML={{ __html: data?.texto }}></span>
        </p>
      </div>

      <hr />

      <input type="text" className="pesquisa-input" />

      <p className="recommend-text">
        Se gostou desse conteúdo, poderá gostar de:
      </p>

      {carrosselData.lenght && <Carrossel data={carrosselData} />}
    </MainContainer>
  );
};

export default CategoriaDetalhes;
