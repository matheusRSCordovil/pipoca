import { Key, useEffect, useState } from "react";
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
  const [dias, setDias] = useState<any[]>([]);
  const [diaAtual, setDiaAtual] = useState<any[]>([]);
  const [categoriaPreenchida, setCategoriaPreenchida] = useState<any>([]);

  const handleClick = (index: number) => {
    setIdAtivo(index + "");
    setAtivo("detalhes");
  };

  useEffect(() => {
    API.get("Jornada/Atual").then((response) => {
      setDiaAtual(response.data.dia);
      setCategoriaPreenchida(response.data.registro);

      for (let i = 1; i < 31; i++) {
        if (!response.data.dia) {
          dias.push(0);
          continue;
        }
        if (i > response.data.dia) {
          dias.push(0);
        } else {
          dias.push(1);
        }
      }

      setDias(dias.slice(0, 30));
    });

    console.log(dias);

    API.get("Conteudo?CategoriaId=1").then((response) => {
      let index = Math.floor(Math.random() * response.data.length - 1);
      setConteudos(response.data[index]);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [mesCompleto, setMesCompleto] = useState<boolean>(false);

  return (
    <MainContainer mesCompleto={mesCompleto}>
      <div className="top-info-container">
        <span className="mensagem">
          <p className="mensagem-do-dia-text">
            {mesCompleto ? "Você chegou no dia" : "Você está no dia"}
          </p>
          <p className="dias-texto">
            {diaAtual ? ("0" + diaAtual).slice(-2) : "00"}
          </p>
          <p className="mensagem-do-dia-text">
            da sua jornada{mesCompleto && "!"}
          </p>
        </span>

        <span className="dias-container">
          <p>00</p>

          <span
            // onClick={() => setMesCompleto(!mesCompleto)}
            style={{ display: "flex", width: "85%", justifyContent: "center" }}
          >
            {dias.length &&
              dias.map((dia: number, index: Key | null | undefined) =>
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
          <img
            src={
              categoriaPreenchida.filter(
                (item: { categoria: string }) => item.categoria === "Humor"
              ).length
                ? HumorIconOn
                : HumorIcon
            }
            alt="humorIcon"
          />
          <p>Humor</p>
          {categoriaPreenchida.filter(
            (item: { categoria: string }) => item.categoria === "Humor"
          ).length && (
            <p>
              {
                categoriaPreenchida.filter(
                  (item: { categoria: string }) => item.categoria === "Humor"
                )[0].opcao
              }
            </p>
          )}
        </div>

        <div>
          <img
            src={
              categoriaPreenchida.filter(
                (item: { categoria: string }) => item.categoria === "Sono"
              ).length
                ? SonoIconOn
                : SonoIcon
            }
            alt="sonoIcon"
          />
          <p>Sono</p>
          {categoriaPreenchida.filter(
            (item: { categoria: string }) => item.categoria === "Sono"
          ).length && (
            <p>
              {
                categoriaPreenchida.filter(
                  (item: { categoria: string }) => item.categoria === "Sono"
                )[0].opcao
              }
            </p>
          )}
        </div>

        <div>
          <img
            src={
              categoriaPreenchida.filter(
                (item: { categoria: string }) => item.categoria === "Sintomas"
              ).length
                ? SintomasIconOn
                : SintomasIcon
            }
            alt="sintomasIcon"
          />
          <p>Sintomas</p>
          {categoriaPreenchida.filter(
            (item: { categoria: string }) => item.categoria === "Sintomas"
          ).length && (
            <p>
              {
                categoriaPreenchida.filter(
                  (item: { categoria: string }) => item.categoria === "Sintomas"
                )[0].opcao
              }
            </p>
          )}
        </div>

        <div>
          <img
            src={
              categoriaPreenchida.filter(
                (item: { produto: string }) => item.produto !== undefined
              ).length
                ? CuidadosIconOn
                : CuidadosIcon
            }
            alt="cuidadosIcon"
          />
          <p>Produtos de Cuidado</p>
          {categoriaPreenchida.filter(
            (item: { produto: string }) => item.produto !== undefined
          ).length && <p>Medicamentos em dia</p>}
        </div>

        <div>
          <img
            src={
              categoriaPreenchida.filter(
                (item: { categoria: string }) => item.categoria === "Rotina"
              ).length
                ? RotinaIconOn
                : RotinaIcon
            }
            alt="rotinaIcon"
          />
          <p>Rotina</p>
          {categoriaPreenchida.filter(
            (item: { categoria: string }) => item.categoria === "Rotina"
          ).length && (
            <p>
              {
                categoriaPreenchida.filter(
                  (item: { categoria: string }) => item.categoria === "Rotina"
                )[0].opcao
              }
            </p>
          )}
        </div>

        <div>
          <img
            src={
              categoriaPreenchida.filter(
                (item: { categoria: string }) => item.categoria === "Banho"
              ).length
                ? BanhoIconOn
                : BanhoIcon
            }
            alt="banhoIcon"
          />
          <p>Banho</p>
          {categoriaPreenchida.filter(
            (item: { categoria: string }) => item.categoria === "Banho"
          ).length && (
            <p>
              {
                categoriaPreenchida.filter(
                  (item: { categoria: string }) => item.categoria === "Banho"
                )[0].opcao
              }
            </p>
          )}
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
