import { DayDiv, IconesDiv, MainContainer, TitleDiv } from "./styles";
import { PRIMARY } from "../../theme/palette";
import { useState } from "react";
import PipocaV2 from "../../assets/img/pipoca-puppet-v2.png";
import Calendar from "../Calendar";
import Pele1 from "../../assets/icon/meuRegistroIcons/pele1.svg";
import Pele1active from "../../assets/icon/meuRegistroIcons/pele1active.svg";
import Pele2 from "../../assets/icon/meuRegistroIcons/pele2.svg";
import Pele2active from "../../assets/icon/meuRegistroIcons/pele2active.svg";
import Pele3 from "../../assets/icon/meuRegistroIcons/pele3.svg";
import Pele3active from "../../assets/icon/meuRegistroIcons/pele3active.svg";
import Pele4 from "../../assets/icon/meuRegistroIcons/pele4.svg";
import Pele4active from "../../assets/icon/meuRegistroIcons/pele4active.svg";
import Sentindo1 from "../../assets/icon/meuRegistroIcons/sentindo1.svg";
import Sentindo1active from "../../assets/icon/meuRegistroIcons/sentindo1active.svg";
import Sentindo2 from "../../assets/icon/meuRegistroIcons/sentindo2.svg";
import Sentindo2active from "../../assets/icon/meuRegistroIcons/sentindo2active.svg";
import Sentindo3 from "../../assets/icon/meuRegistroIcons/sentindo3.svg";
import Sentindo3active from "../../assets/icon/meuRegistroIcons/sentindo3active.svg";
import Sentindo4 from "../../assets/icon/meuRegistroIcons/sentindo4.svg";
import Sentindo4active from "../../assets/icon/meuRegistroIcons/sentindo4active.svg";
import dormir1 from "../../assets/icon/meuRegistroIcons/dormir1.svg";
import dormir1active from "../../assets/icon/meuRegistroIcons/dormir1active.svg";
import dormir2 from "../../assets/icon/meuRegistroIcons/dormir2.svg";
import dormir2active from "../../assets/icon/meuRegistroIcons/dormir2active.svg";
import dormir3 from "../../assets/icon/meuRegistroIcons/dormir3.svg";
import dormir3active from "../../assets/icon/meuRegistroIcons/dormir3active.svg";
import dormir4 from "../../assets/icon/meuRegistroIcons/dormir4.svg";
import dormir4active from "../../assets/icon/meuRegistroIcons/dormir4active.svg";
import Banho1 from "../../assets/icon/meuRegistroIcons/banho1.svg";
import Banho1active from "../../assets/icon/meuRegistroIcons/banho1active.svg";
import Banho2 from "../../assets/icon/meuRegistroIcons/banho2.svg";
import Banho2active from "../../assets/icon/meuRegistroIcons/banho2active.svg";
import Banho3 from "../../assets/icon/meuRegistroIcons/banho3.svg";
import Banho3active from "../../assets/icon/meuRegistroIcons/banho3active.svg";
import Banho4 from "../../assets/icon/meuRegistroIcons/banho4.svg";
import Banho4active from "../../assets/icon/meuRegistroIcons/banho4active.svg";
import Dia1 from "../../assets/icon/meuRegistroIcons/dia1.svg";
import Dia1active from "../../assets/icon/meuRegistroIcons/dia1active.svg";
import Dia2 from "../../assets/icon/meuRegistroIcons/dia2.svg";
import Dia2active from "../../assets/icon/meuRegistroIcons/dia2active.svg";
import Dia3 from "../../assets/icon/meuRegistroIcons/dia3.svg";
import Dia3active from "../../assets/icon/meuRegistroIcons/dia3active.svg";
import Dia4 from "../../assets/icon/meuRegistroIcons/dia4.svg";
import Dia4active from "../../assets/icon/meuRegistroIcons/dia4active.svg";
import PencilIcon from "../../assets/icon/pencilIcon.svg";
import EditAtivoIcon from "../../assets/icon/editIcon.svg";
import LixeiraIcon from "../../assets/icon/lixeiraIcon.svg";
import ProgressoDonePage from "../ProgressDonePage";
import DeletarModal from "../DeletarModal";

const RegistroPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activePele, setActivePele] = useState("");
  const [activeSentindo, setActiveSentindo] = useState("");
  const [activeDormir, setActiveDormir] = useState("");
  const [activeBanho, setActiveBanho] = useState("");
  const [activeDia, setActiveDia] = useState("");
  const [editAtivo, setEditAtivo] = useState("");
  const [open, setOpen] = useState(false);

  const handleDeletarModal = () => {
    setOpen(!open);
  };

  const handleEditAtivo = (e: string) => {
    if (editAtivo === e) {
      setEditAtivo("");
    } else {
      setEditAtivo(e);
    }
  };

  return !showCalendar ? (
    <MainContainer>
      <div className="calendar-registro">
        <p className="ciclo">1º ciclo</p>

        <div className="calendar-list" onClick={() => setShowCalendar(true)}>
          <div className="calendar-white-end"></div>
          <div className="calendar-scroll-div">
            {Array.from(Array(10), (_, i) => i + 1).map((day, i) => (
              <DayDiv key={i}>
                <p>{day}</p>
              </DayDiv>
            ))}
          </div>
        </div>
      </div>

      <TitleDiv>Como está sua pele?</TitleDiv>
      <IconesDiv>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => setActivePele("pele1")}
        >
          <img src={activePele === "pele1" ? Pele1active : Pele1} alt="icone" />
          <p>Boa</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => setActivePele("pele2")}
        >
          <img src={activePele === "pele2" ? Pele2active : Pele2} alt="icone" />
          <p>Ressecada</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => setActivePele("pele3")}
        >
          <img src={activePele === "pele3" ? Pele3active : Pele3} alt="icone" />
          <p>Com coceira</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => setActivePele("pele4")}
        >
          <img src={activePele === "pele4" ? Pele4active : Pele4} alt="icone" />
          <p>Com dor</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre como estava sua pele hoje?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como você está se sentindo hoje? </TitleDiv>
      <IconesDiv>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => setActiveSentindo("sentindo1")}
            src={activeSentindo === "sentindo1" ? Sentindo1active : Sentindo1}
            alt="icone"
          />
          <p>Feliz</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => setActiveSentindo("sentindo2")}
            src={activeSentindo === "sentindo2" ? Sentindo2active : Sentindo2}
            alt="icone"
          />
          <p>Normal</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => setActiveSentindo("sentindo3")}
            src={activeSentindo === "sentindo3" ? Sentindo3active : Sentindo3}
            alt="icone"
          />
          <p>Triste</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => setActiveSentindo("sentindo4")}
            src={activeSentindo === "sentindo4" ? Sentindo4active : Sentindo4}
            alt="icone"
          />
          <p>Com estresse</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre o seu humor de hoje?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como você dormiu?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => setActiveDormir("dormir1")}
            src={activeDormir === "dormir1" ? dormir1active : dormir1}
            alt="icone"
          />
          <p>Bem</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => setActiveDormir("dormir2")}
            src={activeDormir === "dormir2" ? dormir2active : dormir2}
            alt="icone"
          />
          <p>Mais ou menos</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => setActiveDormir("dormir3")}
            src={activeDormir === "dormir3" ? dormir3active : dormir3}
            alt="icone"
          />
          <p>Mal</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => setActiveDormir("dormir4")}
            src={activeDormir === "dormir4" ? dormir4active : dormir4}
            alt="icone"
          />
          <p>Insônia</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre esse momento?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como foi seu banho?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => setActiveBanho("banho1")}
            src={activeBanho === "banho1" ? Banho1active : Banho1}
            alt="icone"
          />
          <p>Fria</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => setActiveBanho("banho2")}
            src={activeBanho === "banho2" ? Banho2active : Banho2}
            alt="icone"
          />
          <p>Ambiente</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => setActiveBanho("banho3")}
            src={activeBanho === "banho3" ? Banho3active : Banho3}
            alt="icone"
          />
          <p>Morno</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => setActiveBanho("banho4")}
            src={activeBanho === "banho4" ? Banho4active : Banho4}
            alt="icone"
          />
          <p>Quente</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu banho?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Como foi seu dia?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => setActiveDia("dia1")}
            src={activeDia === "dia1" ? Dia1active : Dia1}
            alt="icone"
          />
          <p>Fiz exercícios</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => setActiveDia("dia2")}
            src={activeDia === "dia2" ? Dia2active : Dia2}
            alt="icone"
          />
          <p>Pratiquei um hobbie</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => setActiveDia("dia3")}
            src={activeDia === "dia3" ? Dia3active : Dia3}
            alt="icone"
          />
          <p>Encontrei amigos</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => setActiveDia("dia4")}
            src={activeDia === "dia4" ? Dia4active : Dia4}
            alt="icone"
          />
          <p>Relaxei</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu dia?
      </label>
      <input className="input-meu-registro" type="text" />

      <TitleDiv>Produtos de Cuidados</TitleDiv>

      <div className="remedio-container">
        <div>
          <p>
            Remédios
            <img
              onClick={() => handleEditAtivo("remedio")}
              src={editAtivo === "remedio" ? EditAtivoIcon : PencilIcon}
              alt="pencil-icon"
              style={{ marginLeft: "10px" }}
            />
          </p>
          <p>Tomei</p>
          <p>Atrasei</p>
          <p>Esqueci</p>
          <p>Não precisei</p>
        </div>

        <div className="remedio-container-tr">
          <p>
            Remédios Nome{" "}
            {editAtivo === "remedio" && (
              <img
                alt="deletar-icone"
                src={LixeiraIcon}
                onClick={() => setOpen(true)}
              />
            )}
          </p>
          <p>
            <input type="radio" name="remedio-radio" />
          </p>
          <p>
            <input type="radio" name="remedio-radio" />
          </p>
          <p>
            <input type="radio" name="remedio-radio" />
          </p>
          <p>
            <input type="radio" name="remedio-radio" />
          </p>
        </div>
      </div>

      <div className="remedio-container">
        <div>
          <p>
            Pomadas
            <img
              onClick={() => handleEditAtivo("pomada")}
              src={editAtivo === "pomada" ? EditAtivoIcon : PencilIcon}
              alt="pencil-icon"
              style={{ marginLeft: "10px" }}
            />
          </p>
          <p>Passei</p>
          <p>Atrasei</p>
          <p>Esqueci</p>
          <p>Não precisei</p>
        </div>
        <div className="remedio-container-tr">
          <p>
            Remédios Nome{" "}
            {editAtivo === "pomada" && (
              <img
                alt="deletar-icone"
                src={LixeiraIcon}
                onClick={() => setOpen(true)}
              />
            )}
          </p>
          <p>
            <input type="radio" name="pomada-radio" />
          </p>
          <p>
            <input type="radio" name="pomada-radio" />
          </p>
          <p>
            <input type="radio" name="pomada-radio" />
          </p>
          <p>
            <input type="radio" name="pomada-radio" />
          </p>
        </div>
      </div>

      <div className="remedio-container">
        <div>
          <p>
            Hidratante
            <img
              onClick={() => handleEditAtivo("hidratante")}
              src={editAtivo === "hidratante" ? EditAtivoIcon : PencilIcon}
              alt="pencil-icon"
              style={{ marginLeft: "10px" }}
            />
          </p>
          <p>Passei</p>
          <p>Atrasei</p>
          <p>Esqueci</p>
          <p>Não precisei</p>
        </div>
        <div className="remedio-container-tr">
          <p>
            Remédios Nome{" "}
            {editAtivo === "hidratante" && (
              <img
                alt="deletar-icone"
                src={LixeiraIcon}
                onClick={() => setOpen(true)}
              />
            )}
          </p>
          <p>
            <input type="radio" name="radio" />
          </p>
          <p>
            <input type="radio" name="radio" />
          </p>
          <p>
            <input type="radio" name="radio" />
          </p>
          <p>
            <input type="radio" name="radio" />
          </p>
        </div>
        {editAtivo === "hidratante" && <p>+ </p>}
      </div>
      <DeletarModal open={open} setOpen={setOpen} />

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais algum comentário sobre seus cuidados de hoje?
      </label>
      <input className="input-meu-registro" type="text" />
    </MainContainer>
  ) : (
    <ProgressoDonePage />
    // <MainContainer>
    //   <Calendar />
    //   <div
    //     style={{
    //       display: "flex",
    //       width: "100%",
    //       height: "270px",
    //       position: "relative",
    //       justifyContent: "flex-end",
    //       maxWidth: "390px",
    //       minWidth: "390px",
    //       marginTop: "30px",
    //     }}
    //   >
    //     <img
    //       src={PipocaV2}
    //       alt="logo"
    //       style={{
    //         width: "192px",
    //         height: "163px",
    //         position: "absolute",
    //         bottom: -25,
    //         left: 0,
    //       }}
    //     />
    //     <div className="info-dias-container">
    //       <h4>Continue assim!</h4>
    //       <p>
    //         Você já completou 7 dias da sua jornanda. Não se esqueça:
    //         <br />
    //         quantos mais dias você registra, mais pontos ganha!
    //       </p>
    //     </div>
    //   </div>
    // </MainContainer>
  );
};

export default RegistroPage;
