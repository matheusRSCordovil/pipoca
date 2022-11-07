import { MainContainer } from "./styles";
import FiltroIcon from "../../assets/icon/filtroIcon.svg";
import { useEffect, useState } from "react";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";

const DepoimentosPage = () => {
  const {
    setAtivo,
    setOpenFilterMenu,
    openFilterMenu,
    setIdAtivo,
    filtrosAtivos,
  } = useHomeProvider();

  const handleClick = (index: number) => {
    setIdAtivo(index + "");
    setAtivo("detalhes");
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(`Conteudo?${filtrosAtivos}`).then((response) => {
      setData(response.data);
    });
  }, [filtrosAtivos]);

  return (
    <MainContainer>
      <span className="depoimento-head">
        <h4 style={{ visibility: "hidden" }}>Depoimentos</h4>
        <img
          onClick={() => setOpenFilterMenu(!openFilterMenu)}
          src={FiltroIcon}
          alt="Depoimentos"
          style={{ width: 26, height: 26 }}
        />
      </span>

      {/* <p className="resumo">
        Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
        incididunt lorem ipsum dolor sit amet consectetur adipiscing elit ut
        aliquam purus sit amet luctus venenatis lorem ipsum dolor sit amet
        consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis.
      </p> */}

      <div className="depoimento-body">
        {data &&
          data.map((item: any, i) => (
            <div
              onClick={() => handleClick(item.id)}
              className="box-depoimento"
              key={i}
            >
              <h5>{item.titulo.slice(0, 25) + "..."}</h5>
              <p>Nome do usuário</p>
            </div>
          ))}
      </div>
    </MainContainer>
  );
};

export default DepoimentosPage;
