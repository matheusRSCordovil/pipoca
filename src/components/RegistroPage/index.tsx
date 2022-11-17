import {
  DayDiv,
  DayDivActive,
  DayDivPast,
  IconesDiv,
  MainContainer,
  TitleDiv,
} from "./styles";
import { PRIMARY } from "../../theme/palette";
import { useEffect, useState } from "react";
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
import {
  filterProductList,
  handleProdutoPost,
} from "../../helpers/dataProtudosFormat";

const RegistroPage = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activePele, setActivePele] = useState("");
  const [activeSentindo, setActiveSentindo] = useState("");
  const [activeDormir, setActiveDormir] = useState("");
  const [activeBanho, setActiveBanho] = useState("");
  const [activeDia, setActiveDia] = useState("");
  const [editAtivo, setEditAtivo] = useState("");
  const [activeInput, setActiveInput] = useState<boolean>(false);
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
  const [dias, setDias] = useState<any[]>([]);
  const [diaAtual, setDiaAtual] = useState<number[]>([]);
  const [remediosList, setRemediosList] = useState<any[]>([]);
  const [hidratantesList, setHidratantesList] = useState<any[]>([]);
  const [pomadasList, setPomadasList] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedDeletId, setSelectedDeletId] = useState<number | null>(null);

  useEffect(() => {
    API.get("Jornada/Atual").then((response) => {
      setDiaAtual(response.data.dia);
      setRemediosList(filterProductList(response, 7));
      setPomadasList(filterProductList(response, 8));
      setHidratantesList(filterProductList(response, 9));

      for (let i = 1; i < 31; i++) {
        if (i === response.data.dia) {
          dias.push(2);
          continue;
        }

        if (i > response.data.dia) {
          dias.push(0);
        } else {
          dias.push(1);
        }
      }

      setDias(dias.slice(0, 30));

      response.data.registro.forEach((jornada: any) => {
        if ([9, 10, 11, 12].includes(jornada.jornadaCategoriaOpcaoId)) {
          activeJornadaIds[0] = jornada.jornadaCategoriaOpcaoId;
          setActiveJornadaIds(activeJornadaIds);
          setActivePele("pele" + jornada.jornadaCategoriaOpcaoId);
          comentariosList[0] = jornada.observacao || "";
        }
        if ([17, 18, 19, 20].includes(jornada.jornadaCategoriaOpcaoId)) {
          activeJornadaIds[1] = jornada.jornadaCategoriaOpcaoId;
          setActiveJornadaIds(activeJornadaIds);
          setActiveSentindo("sentindo" + jornada.jornadaCategoriaOpcaoId);
          comentariosList[1] = jornada.observacao || "";
        }
        if ([13, 14, 15, 16].includes(jornada.jornadaCategoriaOpcaoId)) {
          activeJornadaIds[2] = jornada.jornadaCategoriaOpcaoId;
          setActiveJornadaIds(activeJornadaIds);
          setActiveDormir("dormir" + jornada.jornadaCategoriaOpcaoId);
          comentariosList[2] = jornada.observacao || "";
        }
        if ([1, 2, 3, 4].includes(jornada.jornadaCategoriaOpcaoId)) {
          activeJornadaIds[3] = jornada.jornadaCategoriaOpcaoId;
          setActiveJornadaIds(activeJornadaIds);
          setActiveBanho("banho" + jornada.jornadaCategoriaOpcaoId);
          comentariosList[3] = jornada.observacao || "";
        }
        if ([5, 6, 7, 8].includes(jornada.jornadaCategoriaOpcaoId)) {
          setActiveDia("dia" + jornada.jornadaCategoriaOpcaoId);
          activeJornadaIds[4] = jornada.jornadaCategoriaOpcaoId;
          setActiveJornadaIds(activeJornadaIds);
          comentariosList[4] = jornada.observacao || "";
        }
      });

      setComentariosList(comentariosList);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeInput, editAtivo, open]);

  const handleComentario = (e: any, index?: number, ativo?: string) => {
    if (ativo) {
      setComentarioAtivo(ativo);
    }

    if (index !== undefined) {
      comentariosList[index] = e;
    }
  };

  const handleComentarioChange = (index: number) => {
    handleClick("", "", index);
    setComentarioAtivo("");
  };

  const handlePostProtudo = (
    categoriaId: number,
    produto: string,
    opcao?: number
  ) => {
    handleProdutoPost(categoriaId, produto, opcao);
    setActiveInput(false);
    setInputValue("");
    setTimeout(() => {
      setEditAtivo("");
    }, 400);
  };

  const handleChekbox = (
    e: any,
    categoriaId: number,
    index: number,
    name: string
  ) => {
    if (e.target.checked) {
      handleProdutoPost(categoriaId, name, index);
    }
  };

  const handleDeletarModal = (id: number) => {
    setOpen(true);
    setSelectedDeletId(id);
  };

  const handleJornadaId = (categoria: string) => {
    if (categoria.includes("pele")) {
      activeJornadaIds[0] = parseInt(categoria.replace("pele", ""));
    }

    if (categoria.includes("sentindo")) {
      activeJornadaIds[1] = parseInt(categoria.replace("sentindo", ""));
    }

    if (categoria.includes("dormir")) {
      activeJornadaIds[2] = parseInt(categoria.replace("dormir", ""));
    }

    if (categoria.includes("banho")) {
      activeJornadaIds[3] = parseInt(categoria.replace("banho", ""));
    }

    if (categoria.includes("dia")) {
      activeJornadaIds[4] = parseInt(categoria.replace("dia", ""));
    }
  };

  const handleEditAtivo = (e: string) => {
    setActiveInput(false);
    if (editAtivo === e) {
      setEditAtivo("");
    } else {
      setEditAtivo(e);
    }
  };

  const handleClick = (e: string, categoria: string, index?: number) => {
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

    index !== undefined &&
      API.post("Jornada/Cadastro", {
        registro: [
          {
            observacao: comentariosList[index],
            jornadaCategoriaOpcaoId: activeJornadaIds[index],
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
            {dias.length &&
              dias.map((dia: number, index: number) =>
                dia === 2 ? (
                  <DayDivActive key={index}>
                    {("0" + (index + 1)).slice(-2)}
                  </DayDivActive>
                ) : dia === 1 ? (
                  <DayDivPast key={index}>
                    {("0" + (index + 1)).slice(-2)}
                  </DayDivPast>
                ) : (
                  <DayDiv key={index}>{("0" + (index + 1)).slice(-2)}</DayDiv>
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
          onClick={() => handleClick("pele9", "pele", 0)}
        >
          <img src={activePele === "pele9" ? Pele1active : Pele1} alt="icone" />
          <p>Boa</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele10", "pele", 0)}
        >
          <img
            src={activePele === "pele10" ? Pele2active : Pele2}
            alt="icone"
          />
          <p>Ressecada</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele11", "pele", 0)}
        >
          <img
            src={activePele === "pele11" ? Pele3active : Pele3}
            alt="icone"
          />
          <p>Com coceira</p>
        </span>
        <span
          style={{ color: PRIMARY.red }}
          onClick={() => handleClick("pele12", "pele", 0)}
        >
          <img
            src={activePele === "pele12" ? Pele4active : Pele4}
            alt="icone"
          />
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
          placeholder={comentariosList[0]}
        />
        {comentarioAtivo === "pele" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange(0)}
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
            onClick={() => handleClick("sentindo17", "sentindo", 1)}
            src={activeSentindo === "sentindo17" ? Sentindo1active : Sentindo1}
            alt="icone"
          />
          <p>Feliz</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo18", "sentindo", 1)}
            src={activeSentindo === "sentindo18" ? Sentindo2active : Sentindo2}
            alt="icone"
          />
          <p>Normal</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo19", "sentindo", 1)}
            src={activeSentindo === "sentindo19" ? Sentindo3active : Sentindo3}
            alt="icone"
          />
          <p>Triste</p>
        </span>
        <span style={{ color: "#FB991C" }}>
          <img
            onClick={() => handleClick("sentindo20", "sentindo", 1)}
            src={activeSentindo === "sentindo20" ? Sentindo4active : Sentindo4}
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
          placeholder={comentariosList[1]}
        />
        {comentarioAtivo === "sentindo" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange(1)}
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
            onClick={() => handleClick("dormir13", "dormir", 2)}
            src={activeDormir === "dormir13" ? dormir1active : dormir1}
            alt="icone"
          />
          <p>Bem</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir14", "dormir", 2)}
            src={activeDormir === "dormir14" ? dormir2active : dormir2}
            alt="icone"
          />
          <p>Mais ou menos</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir15", "dormir", 2)}
            src={activeDormir === "dormir15" ? dormir3active : dormir3}
            alt="icone"
          />
          <p>Mal</p>
        </span>
        <span style={{ color: "#104F92" }}>
          <img
            onClick={() => handleClick("dormir16", "dormir", 2)}
            src={activeDormir === "dormir16" ? dormir4active : dormir4}
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
          placeholder={comentariosList[2]}
        />
        {comentarioAtivo === "dormir" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange(2)}
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
            onClick={() => handleClick("banho1", "banho", 3)}
            src={activeBanho === "banho1" ? Banho1active : Banho1}
            alt="icone"
          />
          <p>Fria</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho2", "banho", 3)}
            src={activeBanho === "banho2" ? Banho2active : Banho2}
            alt="icone"
          />
          <p>Ambiente</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho3", "banho", 3)}
            src={activeBanho === "banho3" ? Banho3active : Banho3}
            alt="icone"
          />
          <p>Morno</p>
        </span>
        <span style={{ color: "#1391ED" }}>
          <img
            onClick={() => handleClick("banho4", "banho", 3)}
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
          placeholder={comentariosList[3]}
        />
        {comentarioAtivo === "banho" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange(3)}
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
            onClick={() => handleClick("dia5", "dia", 4)}
            src={activeDia === "dia5" ? Dia1active : Dia1}
            alt="icone"
          />
          <p>Fiz exercícios</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia6", "dia", 4)}
            src={activeDia === "dia6" ? Dia2active : Dia2}
            alt="icone"
          />
          <p>Pratiquei um hobbie</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia7", "dia", 4)}
            src={activeDia === "dia7" ? Dia3active : Dia3}
            alt="icone"
          />
          <p>Encontrei amigos</p>
        </span>
        <span style={{ color: "#58CC63" }}>
          <img
            onClick={() => handleClick("dia8", "dia", 4)}
            src={activeDia === "dia8" ? Dia4active : Dia4}
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
          placeholder={comentariosList[4]}
        />
        {comentarioAtivo === "dia" ? (
          <img
            alt="chek-icon"
            src={CheckIcon}
            onClick={() => handleComentarioChange(4)}
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

        {remediosList &&
          remediosList.map((item: any, index: number) => (
            <div className="remedio-container-tr" key={index}>
              <p>
                {item.produto}
                {editAtivo === "remedio" && (
                  <img
                    alt="deletar-icone"
                    src={LixeiraIcon}
                    onClick={() => handleDeletarModal(item.id)}
                  />
                )}
              </p>

              <div></div>
              <p>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 29}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 29, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 30}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 30, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 31}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 31, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 32}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 32, item.produto)
                  }
                />
              </p>
            </div>
          ))}

        {editAtivo === "remedio" && !activeInput && (
          <p className="add-remedio" onClick={() => setActiveInput(true)}>
            + Novo item
          </p>
        )}

        {editAtivo === "remedio" && activeInput && (
          <span
            className="input-meu-registro-box"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <input
              className="input-meu-registro"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img
              alt="chek-icon"
              src={CheckIcon}
              onClick={() => handlePostProtudo(7, inputValue, 29)}
            />
          </span>
        )}
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

        {pomadasList &&
          pomadasList.map((item: any, index: number) => (
            <div className="remedio-container-tr" key={index}>
              <p>
                {item.produto}
                {editAtivo === "pomada" && (
                  <img
                    alt="deletar-icone"
                    src={LixeiraIcon}
                    onClick={() => handleDeletarModal(item.id)}
                  />
                )}
              </p>

              <div></div>
              <p>
                <input
                  type="radio"
                  name="radio-pomada"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 25}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 25, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-pomada"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 26}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 26, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-pomada"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 27}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 27, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-pomada"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 28}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 28, item.produto)
                  }
                />
              </p>
            </div>
          ))}

        {editAtivo === "pomada" && !activeInput && (
          <p className="add-remedio" onClick={() => setActiveInput(true)}>
            + Novo item
          </p>
        )}

        {editAtivo === "pomada" && activeInput && (
          <span
            className="input-meu-registro-box"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <input
              className="input-meu-registro"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img
              alt="chek-icon"
              src={CheckIcon}
              onClick={() => handlePostProtudo(8, inputValue, 25)}
            />
          </span>
        )}
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

        {hidratantesList &&
          hidratantesList.map((item: any, index: number) => (
            <div className="remedio-container-tr" key={index}>
              <p>
                {item.produto}
                {editAtivo === "hidratante" && (
                  <img
                    alt="deletar-icone"
                    src={LixeiraIcon}
                    onClick={() => handleDeletarModal(item.id)}
                  />
                )}
              </p>

              <div></div>
              <p>
                <input
                  type="radio"
                  name="radio-hidratante"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 21}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 21, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-hidratante"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 22}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 22, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-hidratante"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 23}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 23, item.produto)
                  }
                />
              </p>
              <p>
                <input
                  type="radio"
                  name="radio-hidratante"
                  defaultChecked={item.jornadaCategoriaOpcaoId === 24}
                  onChange={(e) =>
                    handleChekbox(e, item.jornadaCategoriaId, 24, item.produto)
                  }
                />
              </p>
            </div>
          ))}

        {editAtivo === "hidratante" && !activeInput && (
          <p className="add-remedio" onClick={() => setActiveInput(true)}>
            + Novo item
          </p>
        )}

        {editAtivo === "hidratante" && activeInput && (
          <span
            className="input-meu-registro-box"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            <input
              className="input-meu-registro"
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <img
              alt="chek-icon"
              src={CheckIcon}
              onClick={() => handlePostProtudo(9, inputValue, 21)}
            />
          </span>
        )}
      </div>

      <DeletarModal open={open} setOpen={setOpen} id={selectedDeletId} />

      <label htmlFor="file-upload" className="label-input">
        Quer adicionar mais algum comentário sobre seus cuidados de hoje?
      </label>

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
            // onClick={() => handleComentarioChange()}
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
            Você já completou {diaAtual} dias da sua jornada. Não se esqueça:
            <br />
            quantos mais dias você registrar, mais conteúdos você irá
            desbloquear! Assim você conhecerá mais sobre a dermatite atópica e
            sobre você mesmo!
          </p>
          <img src={PipocaV2} alt="logo" />
        </div>
      </div>
    </MainContainer>
  );
};

export default RegistroPage;
