import {
  DayDiv,
  DayDivActive,
  IconesDiv,
  MainContainer,
  TitleDiv,
} from "./styles";
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
import CheckIcon from "../../assets/icon/doneIcon.svg";
import EditAtivoIcon from "../../assets/icon/editIcon.svg";
import LixeiraIcon from "../../assets/icon/lixeiraIcon.svg";
import ProgressoDonePage from "../ProgressDonePage";
import DeletarModal from "../DeletarModal";
import API from "../../services";
import jwt_decode from "jwt-decode";

const RegistroPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activePele, setActivePele] = useState("");
  const [activeSentindo, setActiveSentindo] = useState("");
  const [activeDormir, setActiveDormir] = useState("");
  const [activeBanho, setActiveBanho] = useState("");
  const [activeDia, setActiveDia] = useState("");
  const [editAtivo, setEditAtivo] = useState("");
  const [open, setOpen] = useState(false);
  const [activeJornadaIds, setActiveJornadaIds] = useState<number[]>([
    12, 20, 16, 4, 8,
  ]);
  const [comentarioAtivo, setComentarioAtivo] = useState("");
  const [comentariosList, setComentariosList] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const handleComentario = (e: any, index?: number, ativo?: string) => {
    if (ativo) {
      setComentarioAtivo(ativo);
    }

    if (index !== undefined) {
      comentariosList[index] = e;
    }
    console.log(comentariosList, e);
  };

  const handleComentarioChange = () => {
    handleClick("", "");
  };

  // const handleDeletarModal = () => {
  //   setOpen(!open);
  // };

  const handleJornadaId = (categoria: string) => {
    if (categoria === "pele4") {
      activeJornadaIds[0] = 12;
    }
    if (categoria === "pele3") {
      activeJornadaIds[0] = 11;
    }
    if (categoria === "pele2") {
      activeJornadaIds[0] = 10;
    }
    if (categoria === "pele1") {
      activeJornadaIds[0] = 9;
    }

    if (categoria === "sentindo4") {
      activeJornadaIds[1] = 20;
    }
    if (categoria === "sentindo3") {
      activeJornadaIds[1] = 19;
    }
    if (categoria === "sentindo2") {
      activeJornadaIds[1] = 18;
    }
    if (categoria === "sentindo1") {
      activeJornadaIds[1] = 17;
    }

    if (categoria === "dormir4") {
      activeJornadaIds[2] = 16;
    }
    if (categoria === "dormir3") {
      activeJornadaIds[2] = 15;
    }
    if (categoria === "dormir2") {
      activeJornadaIds[2] = 14;
    }
    if (categoria === "dormir1") {
      activeJornadaIds[2] = 13;
    }

    if (categoria === "banho4") {
      activeJornadaIds[3] = 4;
    }
    if (categoria === "banho3") {
      activeJornadaIds[3] = 3;
    }
    if (categoria === "banho2") {
      activeJornadaIds[3] = 2;
    }
    if (categoria === "banho1") {
      activeJornadaIds[3] = 1;
    }

    if (categoria === "dia4") {
      activeJornadaIds[4] = 8;
    }
    if (categoria === "dia3") {
      activeJornadaIds[4] = 7;
    }
    if (categoria === "dia2") {
      activeJornadaIds[4] = 6;
    }
    if (categoria === "dia1") {
      activeJornadaIds[4] = 5;
    }
  };

  const handleEditAtivo = (e: string) => {
    if (editAtivo === e) {
      setEditAtivo("");
    } else {
      setEditAtivo(e);
    }
  };

  const handleClick = (e: string, categoria: string) => {
    let today = new Date().toISOString();

    let decoded: any = jwt_decode(localStorage.getItem("token") || "");

    let userId = decoded.userId;

    console.log(userId);

    handleJornadaId(e);

    if (categoria === "dia") {
      if (activeDia === e) {
        return;
      } else {
        setActiveDia(e);
      }
    }

    if (categoria === "banho") {
      if (activeBanho === e) {
        return;
      } else {
        setActiveBanho(e);
      }
    }

    if (categoria === "dormir") {
      if (activeDormir === e) {
        return;
      } else {
        setActiveDormir(e);
      }
    }

    if (categoria === "pele") {
      if (activePele === e) {
        return;
      } else {
        setActivePele(e);
      }
    }

    if (categoria === "sentindo") {
      if (activeSentindo === e) {
        return;
      } else {
        setActiveSentindo(e);
      }
    }

    API.put("Jornada/1", {
      usuarioId: 1,
      dia: 1,
      data: today,
      ciclo: 1,
      registro: [
        {
          jornadaId: 1,
          observacao: comentariosList[0],
          jornadaCategoriaOpcaoId: activeJornadaIds[0],
          opcao: "string",
          jornadaCategoriaId: 3,
          categoria: "Sintomas",
          data: today,
        },
        {
          jornadaId: 1,
          observacao: comentariosList[1],
          jornadaCategoriaOpcaoId: activeJornadaIds[1],
          opcao: "string",
          jornadaCategoriaId: 1,
          categoria: "Humor",
          data: today,
        },
        {
          jornadaId: 1,
          observacao: comentariosList[2],
          jornadaCategoriaOpcaoId: activeJornadaIds[2],
          opcao: "string",
          jornadaCategoriaId: 2,
          categoria: "Sono",
          data: today,
        },
        {
          jornadaId: 1,
          observacao: comentariosList[3],
          jornadaCategoriaOpcaoId: activeJornadaIds[3],
          opcao: "string",
          jornadaCategoriaId: 6,
          categoria: "Banho",
          data: today,
        },
        {
          jornadaId: 1,
          observacao: comentariosList[4],
          jornadaCategoriaOpcaoId: activeJornadaIds[4],
          opcao: "string",
          jornadaCategoriaId: 5,
          categoria: "Rotina",
          data: today,
        },
      ],
    });
  };

  return !showCalendar ? (
    <MainContainer>
      <div className="calendar-registro">
        <p className="ciclo">1º ciclo</p>

        <div className="calendar-list" onClick={() => setShowCalendar(true)}>
          <div className="calendar-white-end"></div>
          <div className="calendar-scroll-div">
            {Array.from(Array(10), (_, i) => i + 1).map((day, i) =>
              i === 0 ? (
                <DayDivActive>
                  <p>1</p>
                </DayDivActive>
              ) : (
                <DayDiv key={i}>
                  <p>{day}</p>
                </DayDiv>
              )
            )}
          </div>
        </div>
      </div>

      {/* 9,10,11,12 */}

      <TitleDiv>Como está sua pele?</TitleDiv>
      <IconesDiv>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele1", "pele")}
        >
          <img src={activePele === "pele1" ? Pele1active : Pele1} alt="icone" />
          <p>Boa</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele2", "pele")}
        >
          <img src={activePele === "pele2" ? Pele2active : Pele2} alt="icone" />
          <p>Ressecada</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele3", "pele")}
        >
          <img src={activePele === "pele3" ? Pele3active : Pele3} alt="icone" />
          <p>Com coceira</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele4", "pele")}
        >
          <img src={activePele === "pele4" ? Pele4active : Pele4} alt="icone" />
          <p>Com dor</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre como estava sua pele hoje?
      </label>

      <span className="input-meu-registro-box">
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 0, "pele")}
          type="text"
        />
        {comentarioAtivo === "pele" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>

      {/* 17,18,19,20 */}

      <TitleDiv>
        Como você está se sentindo<span className="hoje-word">&nbsp;hoje</span>?{" "}
      </TitleDiv>
      <IconesDiv>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo1", "sentindo")}
            src={activeSentindo === "sentindo1" ? Sentindo1active : Sentindo1}
            alt="icone"
          />
          <p>Feliz</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo2", "sentindo")}
            src={activeSentindo === "sentindo2" ? Sentindo2active : Sentindo2}
            alt="icone"
          />
          <p>Normal</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo3", "sentindo")}
            src={activeSentindo === "sentindo3" ? Sentindo3active : Sentindo3}
            alt="icone"
          />
          <p>Triste</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo4", "sentindo")}
            src={activeSentindo === "sentindo4" ? Sentindo4active : Sentindo4}
            alt="icone"
          />
          <p>Com estresse</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre o seu humor de hoje?
      </label>
      <span className="input-meu-registro-box">
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 1, "sentindo")}
          type="text"
        />
        {comentarioAtivo === "sentindo" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>

      {/* 13,14,15,16 */}

      <TitleDiv>Como você dormiu?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir1", "dormir")}
            src={activeDormir === "dormir1" ? dormir1active : dormir1}
            alt="icone"
          />
          <p>Bem</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir2", "dormir")}
            src={activeDormir === "dormir2" ? dormir2active : dormir2}
            alt="icone"
          />
          <p>Mais ou menos</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir3", "dormir")}
            src={activeDormir === "dormir3" ? dormir3active : dormir3}
            alt="icone"
          />
          <p>Mal</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir4", "dormir")}
            src={activeDormir === "dormir4" ? dormir4active : dormir4}
            alt="icone"
          />
          <p>Insônia</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre esse momento?
      </label>
      <span className="input-meu-registro-box">
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 2, "dormir")}
          type="text"
        />
        {comentarioAtivo === "dormir" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>

      {/* 1,2,3,4 */}

      <TitleDiv>Como foi seu banho?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho1", "banho")}
            src={activeBanho === "banho1" ? Banho1active : Banho1}
            alt="icone"
          />
          <p>Fria</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho2", "banho")}
            src={activeBanho === "banho2" ? Banho2active : Banho2}
            alt="icone"
          />
          <p>Ambiente</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho3", "banho")}
            src={activeBanho === "banho3" ? Banho3active : Banho3}
            alt="icone"
          />
          <p>Morno</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho4", "banho")}
            src={activeBanho === "banho4" ? Banho4active : Banho4}
            alt="icone"
          />
          <p>Quente</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu banho?
      </label>
      <span className="input-meu-registro-box">
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 3, "banho")}
          type="text"
        />
        {comentarioAtivo === "banho" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>

      {/* 5,6,7,8 */}

      <TitleDiv>Como foi seu dia?</TitleDiv>
      <IconesDiv>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia1", "dia")}
            src={activeDia === "dia1" ? Dia1active : Dia1}
            alt="icone"
          />
          <p>Fiz exercícios</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia2", "dia")}
            src={activeDia === "dia2" ? Dia2active : Dia2}
            alt="icone"
          />
          <p>Pratiquei um hobbie</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia3", "dia")}
            src={activeDia === "dia3" ? Dia3active : Dia3}
            alt="icone"
          />
          <p>Encontrei amigos</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia4", "dia")}
            src={activeDia === "dia4" ? Dia4active : Dia4}
            alt="icone"
          />
          <p>Relaxei</p>
        </span>
      </IconesDiv>

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais alguma coisa sobre seu dia?
      </label>
      <span className="input-meu-registro-box">
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 4, "dia")}
          type="text"
        />
        {comentarioAtivo === "dia" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>

      <TitleDiv>Produtos de Cuidados</TitleDiv>

      <div className="remedio-container">
        <div>
          <p>Remédios </p>
          <p>
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

          <div></div>

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
          <p>Pomadas</p>
          <p>
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

          <div></div>
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
          <p>Hidratante</p>
          <p>
            {" "}
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
          <div></div>
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
      {/* <input className="input-meu-registro" type="text" /> */}
      <span className="input-meu-registro-box" style={{ marginBottom: 40 }}>
        <input
          className="input-meu-registro"
          onChange={(e) => handleComentario(e.target.value, 5, "plus")}
          type="text"
        />
        {comentarioAtivo === "plus" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange()}
          />
        ) : (
          <img src={PencilIcon} alt="edit" />
        )}
      </span>
    </MainContainer>
  ) : (
    // <ProgressoDonePage />
    <MainContainer>
      <Calendar />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "270px",
          position: "relative",
          justifyContent: "flex-end",
          maxWidth: "390px",
          marginTop: "30px",
        }}
      >
        <div className="info-dias-container">
          <h4>Continue assim!</h4>
          <p>
            Você já completou 7 dias da sua jornada. Não se esqueça:
            <br />
            quantos mais dias você registrar, mais conteúdos você irá
            desbloquear! Assim você conhecerá mais sobre a dermatite atípica e
            sobre você mesmo!
          </p>
          <img src={PipocaV2} alt="logo" />
        </div>
      </div>
    </MainContainer>
  );
};

export default RegistroPage;
