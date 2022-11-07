import { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import PuppetHandsUp from "../../assets/img/pipoca-puppet-v3.png";
import HumorIcon from "../../assets/icon/hojeIcons/humor.png";
import HumorIconOn from "../../assets/icon/hojeIcons/humorOn.png";
import SonoIcon from "../../assets/icon/hojeIcons/sono.png";
import SonoIconOn from "../../assets/icon/hojeIcons/sonoOn.png";
import SintomasIcon from "../../assets/icon/hojeIcons/sintomas.png";
import SintomasIconOn from "../../assets/icon/hojeIcons/sintomasOn.png";
import CuidadosIcon from "../../assets/icon/hojeIcons/cuidados.png";
import CuidadosIconOn from "../../assets/icon/hojeIcons/cuidadosOn.png";
import RotinaIcon from "../../assets/icon/hojeIcons/rotina.png";
import RotinaIconOn from "../../assets/icon/hojeIcons/rotinasOn.png";
import BanhoIcon from "../../assets/icon/hojeIcons/banho.png";
import BanhoIconOn from "../../assets/icon/hojeIcons/banhoOn.png";
import PlusIcon from "../../assets/icon/hojeIcons/plus.png";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";

const HojePage = () => {
  const { setAtivo, setIdAtivo } = useHomeProvider();

  const [conteudos, setConteudos] = useState<any>([]);

  const handleClick = (index: number) => {
    setIdAtivo(index + "");
    setAtivo("detalhes");
  };

  useEffect(() => {
    API.get("Conteudo?CategoriaId=1").then((response) => {
      let index = Math.floor(Math.random() * response.data.length - 1);
      setConteudos(response.data[index]);
    });
  }, []);

  const dias = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
  ];

  const [mesCompleto, setMesCompleto] = useState<boolean>(false);

  return (
    <MainContainer mesCompleto={mesCompleto}>
      <div className="top-info-container">
        <span className="mensagem">
          <p className="mensagem-do-dia-text">
            {mesCompleto ? "Você chegou no dia" : "Você está no dia"}
          </p>
          <p className="dias-texto">{mesCompleto ? "30" : "01"}</p>
          <p className="mensagem-do-dia-text">
            da sua jornada{mesCompleto && "!"}
          </p>
        </span>

        <span className="dias-container">
          <p>00</p>

          <span
            onClick={() => setMesCompleto(!mesCompleto)}
            style={{ display: "flex", width: "85%", justifyContent: "center" }}
          >
            {dias.map((dia, index) =>
              dia === 1 ? (
                <div className="box-dia on" key={index}></div>
              ) : (
                <div className="box-dia" key={index}></div>
              )
            )}
          </span>
          <p>30</p>
        </span>

        {mesCompleto && (
          <div className="mes-completo-container">
            <img
              src={PuppetHandsUp}
              alt="PuppetHandsUp"
              style={{ width: "198px", height: "186px" }}
            />
            <div className="parabens-container">
              <h3>PARABÉNS!</h3>
              <p>
                Você concluiu os 30 dias da sua jornada. Saiba o quanto você
                avançou neste mês!
              </p>
              <button onClick={() => setAtivo("relatorio")}>
                Quero ver meu relatório mensal!
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="status-registro-text">
        {mesCompleto
          ? "Valeu por ter efetuado seu registro!"
          : "Você ainda não fez o seu registro hoje!"}
      </p>
      {mesCompleto && (
        <p className="status-registro-text-sub">Hoje você está:</p>
      )}

      <div className="status-container">
        <div>
          <img src={mesCompleto ? HumorIconOn : HumorIcon} alt="humorIcon" />
          <p>Humor</p>
          {mesCompleto && <p>Feliz</p>}
        </div>

        <div>
          <img src={mesCompleto ? SonoIconOn : SonoIcon} alt="sonoIcon" />
          <p>Sono</p>
          {mesCompleto && <p>Feliz</p>}
        </div>

        <div>
          <img
            src={mesCompleto ? SintomasIconOn : SintomasIcon}
            alt="sintomasIcon"
          />
          <p>Sintomas</p>
          {mesCompleto && <p>Feliz</p>}
        </div>

        <div>
          <img
            src={mesCompleto ? CuidadosIconOn : CuidadosIcon}
            alt="cuidadosIcon"
          />
          <p>Produtos de Cuidado</p>
          {mesCompleto && <p>Feliz</p>}
        </div>

        <div>
          <img src={mesCompleto ? RotinaIconOn : RotinaIcon} alt="rotinaIcon" />
          <p>Rotina</p>
          {mesCompleto && <p>Feliz</p>}
        </div>

        <div>
          <img src={mesCompleto ? BanhoIconOn : BanhoIcon} alt="banhoIcon" />
          <p>Banho</p>
          {mesCompleto && <p>Feliz</p>}
        </div>
      </div>

      {mesCompleto ? (
        <p className="ajuste-registro-text">Ajustar meu registro</p>
      ) : (
        <button
          className="registrar-button"
          onClick={() => setAtivo("registro")}
        >
          Registrar
        </button>
      )}

      <p className="aprendizagem-do-dia-text">Aprendizagem do dia</p>

      <div className="aprendizagem-card">
        <h4>{conteudos && conteudos?.titulo}</h4>
        <p>{conteudos && conteudos?.resumo}</p>
        <img
          src={PlusIcon}
          alt="plusIcon"
          className="plus-icone"
          onClick={() => handleClick(conteudos.id)}
        />
      </div>
    </MainContainer>
  );
};

export default HojePage;
