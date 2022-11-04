import { MainContainer } from "./styles";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { useEffect, useState } from "react";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";

const DepoimentosPage = () => {
  const { openFilterMenu, setOpenFilterMenu, setAtivo } = useHomeProvider();

  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("Conteudo").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <MainContainer>
      <span className="depoimento-head">
        <h4>Depoimentos</h4>
        <img
          onClick={() => setOpenFilterMenu(!openFilterMenu)}
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
            onClick={() => setAtivo("detalhes")}
            className="box-depoimento"
            key={i}
          >
            <h5>asdadasdasd</h5>
            <p>Nome do usuário</p>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default DepoimentosPage;
