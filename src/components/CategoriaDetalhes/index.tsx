import React, { useEffect, useState } from "react";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";
import Carrossel from "../Carrossel";
import { MainContainer } from "./styles";

const CategoriaDetalhes = () => {
  const [data, setData] = useState<any>(null);
  const [carrosselData, setCarrosselData] = useState<any>([]);

  const { idAtivo } = useHomeProvider();

  useEffect(() => {
    API.get(`Conteudo`).then((response) => {
      setCarrosselData(response.data);
      console.log(response.data);
    });

    API.get(`Conteudo/${idAtivo}`).then((response) => {
      setData(response.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {}, [carrosselData]);

  return (
    <MainContainer>
      <div className="img-box-header"></div>
      <h4>{data?.titulo}</h4>
      <p className="subtitle">
        {data?.autor} •19/01/22 • {data?.duracao} min de duração
      </p>
      <div className="texto-box">
        <p>
          {" "}
          <span>{data?.texto.slice(0, 1)}</span>
          {data?.texto.slice(1, 5000)}
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
