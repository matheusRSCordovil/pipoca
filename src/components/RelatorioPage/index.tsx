import { MainContainer } from "./styles";
import { useEffect, useState } from "react";
import ShareIcon from "../../assets/img/shareIcon.png";
import LineGraphicRelatorio from "../LineGraphicRelatorio";
import BarRed from "../../assets/img/barRed.png";
import BarPurple from "../../assets/img/barPurple.png";
import BarOrange from "../../assets/img/barOrange.png";
import BarBlue from "../../assets/img/barBlue.png";
import BarIcons from "../../assets/img/barHumor.png";
import BarGreen from "../../assets/img/barGreen.png";
import LineGraphicIcons from "../LinegraphicIcons";
import LineDotGreen from "../LineDotGreen";
import LineGraphicMultiColor from "../LineGraphicMultiColor";
import ComentarioModal from "../ComentarioModal";
import API from "../../services";
import { convertLineGraphic } from "../../helpers/dataConvertLineGraphic";

const RelatorioPage = () => {
  const [open, setOpen] = useState(false);
  const [borderColor, setBorderColor] = useState("#104F92");
  const [sintomasData, setSintomasData] = useState<any>([]);
  const [humorData, setHumorData] = useState<any>([]);
  const [sonoData, setSonoData] = useState<any>([]);
  const [banhoData, setBanhoData] = useState<any>([]);

  const handleOpen = (color: string) => {
    setOpen(true);
    setBorderColor(color);
  };

  useEffect(() => {
    API.get("Jornada/Periodo").then((response) => {
      setSintomasData([convertLineGraphic(response, 3)]);
      setHumorData([convertLineGraphic(response, 1)]);
      setSonoData([convertLineGraphic(response, 2)]);
      setBanhoData([convertLineGraphic(response, 6)]);
    });
  }, []);

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
        <LineGraphicRelatorio
          bar={BarRed}
          color={"#F84A24"}
          open={open}
          setOpen={handleOpen}
          data={sintomasData}
        />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#FB991C" }}
        >
          Nestes dias, você se sentiu:
        </div>
        <LineGraphicRelatorio
          bar={BarOrange}
          color={"#FB991C"}
          open={open}
          setOpen={handleOpen}
          data={humorData}
        />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#104F92" }}
        >
          Nestes dias, você dormiu:
        </div>
        <LineGraphicRelatorio
          bar={BarPurple}
          color={"#104F92"}
          open={open}
          setOpen={handleOpen}
          data={sonoData}
        />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#1391ED" }}
        >
          Nestes dias, seu banho foi:
        </div>
        <LineGraphicRelatorio
          bar={BarBlue}
          color={"#1391ED"}
          open={open}
          setOpen={handleOpen}
          data={banhoData}
        />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#58CC63" }}
        >
          Nestes dias, você realizou:
        </div>
        <LineDotGreen bar={BarGreen} color={"#58CC63"} />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#C4C4C4" }}
        >
          Então, seu histórico é:
        </div>
        <LineGraphicIcons bar={BarIcons} color={"#C4C4C4"} />

        <div
          className="grafico-titulo-container-label"
          style={{ backgroundColor: "#7D7D7D" }}
        >
          Sua rotina de medicações foi:
        </div>
        <LineGraphicMultiColor color={"#7D7D7D"} />
      </div>
      <ComentarioModal
        open={open}
        setOpen={setOpen}
        borderColor={borderColor}
      />
    </MainContainer>
  );
};

export default RelatorioPage;
