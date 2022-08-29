import { MainContainer } from "./styles";
import ShareIcon from "../../assets/img/shareIcon.png";
import LineGraphicRelatorio from "../LineGraphicRelatorio";
import BarRed from "../../assets/img/barRed.png";
import BarPurple from "../../assets/img/barPurple.png";
import BarOrange from "../../assets/img/barOrange.png";
import BarBlue from "../../assets/img/barBlue.png";

const RelatorioPage = () => {
  return (
    <MainContainer>
      <div className="registro-diario-box">
        <p>Registros diários</p>
        <img alt="" src={ShareIcon} />
      </div>

      <h4>Histórico dos registros diários</h4>

      <p className="resumo">
        Analisando seus registros preechidos de forma diária, é possível ver
        alguns padrões seus, como:
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
        }}
      >
        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#F84A24" }}
        >
          Nestes dias, sua pele estava:
        </div>
        <LineGraphicRelatorio bar={BarRed} color={"#F84A24"} />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#FB991C" }}
        >
          Nestes dias, você se sentiu:
        </div>
        <LineGraphicRelatorio bar={BarOrange} color={"#FB991C"} />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#104F92" }}
        >
          Nestes dias, você dormiu:
        </div>
        <LineGraphicRelatorio bar={BarPurple} color={"#104F92"} />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#1391ED" }}
        >
          Nestes dias, seu banho foi:
        </div>
        <LineGraphicRelatorio bar={BarBlue} color={"#1391ED"} />
      </div>
    </MainContainer>
  );
};

export default RelatorioPage;
