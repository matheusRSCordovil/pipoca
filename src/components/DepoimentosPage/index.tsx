import { MainContainer } from "./styles";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { useState } from "react";
import Carrossel from "../Carrossel";

const DepoimentosPage = () => {
  const [singleDepoimento, setSingleDepoimento] = useState(false);

  return !singleDepoimento ? (
    <MainContainer>
      <span className="depoimento-head">
        <h4>Depoimentos</h4>
        <img
          src={FiltroIcon}
          alt="Depoimentos"
          style={{ width: 26, height: 26 }}
        />
      </span>

      <p className="resumo">
        Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
        incididunt lorem ipsum dolor sit amet consectetur adipiscing elit ut
        aliquam purus sit amet luctus venenatis lorem ipsum dolor sit amet
        consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.
      </p>

      <div className="depoimento-body">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            onClick={() => setSingleDepoimento(true)}
            className="box-depoimento"
            key={i}
          >
            <h5>asdadasdasd</h5>
            <p>Nome do usuário</p>
          </div>
        ))}
      </div>
    </MainContainer>
  ) : (
    <MainContainer>
      <div className="img-box-header"></div>
      <h4>Título deste conteúdo aqui</h4>
      <p className="subtitle">
        Dra. Natália Schmitz •19/01/22 • 5 min de duração
      </p>
      <div className="texto-box">
        <p>
          {" "}
          <span>L</span>orem ipsum dolor sit amet consectetur adipiscing elit
          sed do eiusmod tempor incididunt lorem ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis
          lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
          purus sit amet luctus venenatis lorem ipsum dolor sit amet consectetur
          adipiscing elit ut aliquam purus sit amet luctus venenatis lorem ipsum
          dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet
          luctus venenatis lorem ipsum dolor sit amet consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis lorem ipsum dolor sit
          amet consectetur adipiscing elit ut aliquam purus sit amet luctus
          venenatis lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam purus sit amet luctus venenatis lorem ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis
          lorem ipsum dolor. Sit amet consectetur adipiscing elit ut aliquam
          purus sit amet luctus venenatis lorem ipsum dolor sit amet consectetur
          adipiscing elit ut aliquam purus sit amet luctus venenatis lorem ipsum
          dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet
          luctus venenatis lorem ipsum dolor sit amet consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis lorem ipsum dolor sit
          amet consectetur adipiscing elit ut aliquam purus sit amet luctus
          venenatis lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam purus sit amet luctus venenatis lorem ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam purus sit amet luctus
          venenatis. Adipiscing elit ut aliquam purus sit amet luctus venenatis
          lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam
          purus sit amet luctus venenatis lorem ipsum dolor sit amet consectetur
          adipiscing elit ut aliquam purus sit amet luctus venenatis lorem ipsum
          dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet
          luctus venenatis lorem ipsum dolor sit amet consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis lorem ipsum dolor sit
          amet consectetur adipiscing elit ut aliquam purus sit amet luctus
          venenatis lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam purus sit amet luctus venenatis lorem ipsum dolor luctus
          venenatis lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam adipiscing elit ut aliquam. Amet luctus venenatis lorem ipsum
          dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet
          luctus venenatis lorem ipsum dolor sit amet consectetur adipiscing
          elit ut aliquam purus sit amet luctus venenatis lorem ipsum dolor sit
          ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit
          amet.
        </p>
      </div>

      <hr />

      <input type="text" className="pesquisa-input" />

      <p className="recommend-text">
        Se gostou desse conteúdo, poderá gostar de:
      </p>
      <Carrossel />
    </MainContainer>
  );
};

export default DepoimentosPage;
