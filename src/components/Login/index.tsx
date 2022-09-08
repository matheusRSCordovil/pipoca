import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MainContainer } from "./styles";
import NextIcon from "../../assets/icon/play.fill.svg";
import PipocaPuppet from "../../assets/img/pipoca-puppet.png";
import PipocaPuppetV22 from "../../assets/img/pipoca-puppet-v22.png";
import PipocaPuppetV4 from "../../assets/img/pipoca-puppet-v4.png";
import PipocaPuppetV3 from "../../assets/img/pipoca-puppet-v3.png";
import CellImg2 from "../../assets/img/group407.png";
import CellImg1 from "../../assets/img/group409.png";
import CellImg5 from "../../assets/img/group414.png";
import CalendarImg from "../../assets/img/group404.png";
import MutedtIcon from "../../assets/img/speaker.png";
import AadaLogo from "../../assets/icon/logo-aada.png";
import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const indicatorStyles: CSSProperties = {
    background: "#1391ED",
    width: 17,
    height: 17,
    display: "inline-block",
    margin: "0 5px",
    borderRadius: "50%",
  };

  const indicatorStylesOn: CSSProperties = {
    background: "#fff",
    width: 17,
    height: 17,
    display: "inline-block",
    margin: "0 5px",
    borderRadius: "50%",
  };

  return (
    <MainContainer>
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                style={{ ...indicatorStylesOn, background: "#FB991C" }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext ? (
            <button
              className="arrow-next"
              onClick={onClickHandler}
              title={label}
            >
              <p>Próximo</p>
              <img alt="next" src={NextIcon} />
            </button>
          ) : (
            <button className="arrow-next" title={label} onClick={handleClick}>
              <p>Entrar!</p>
              <img alt="next" src={NextIcon} />
            </button>
          )
        }
      >
        <div
          className="login-container"
          style={{
            minHeight: "100vh",
            width: "100%",
            height: "100%",
            minWidth: "390px",
          }}
        >
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />
          <div className="text-1-container">
            <h4>Olá!</h4>

            <p style={{ marginBottom: "0" }}>
              Bem-vindo à Jornada da Pipoca Atópica!
            </p>

            <p>Como podemos te chamar?</p>
            <input
              type="text"
              style={{
                width: "354px",
                height: "50px",
                margin: "0 auto",
                border: "none",
                borderRadius: "20.5px",
                boxShadow: "0px 4px 4px 0px #00000040",
                zIndex: 100,
              }}
            />
          </div>

          <div className="bottom-div-1">
            <img
              alt="pipoca-puppet"
              src={PipocaPuppet}
              style={{
                width: "292px",
                height: "248px",
                position: "absolute",
                bottom: "80px",
                left: "15%",
              }}
            />
          </div>
        </div>

        <div className="login-container-2">
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />

          <div className="text-2-container">
            <h4>Oi Ana,</h4>
            <p>Verificamos aqui que esta é sua primeira jornada!</p>
            <p>
              Nosso objetivo é conhecer melhor sua vida com a dermatite atópica
              e dar alguns conselhos de como melhorá-la.
            </p>
            <p>A Pipoca Atópica será nossa grande aliada nesta jornada!</p>
          </div>
          <img
            alt="pipoca-puppet"
            src={PipocaPuppetV22}
            style={{
              width: "260px",
              height: "260px",
              position: "absolute",
              bottom: "80px",
              right: "0",
            }}
          />
        </div>

        <div className="login-container-3">
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />

          <img
            style={{
              position: "absolute",
              width: "350px",
              transform: "translate(6%,16%)",
            }}
            src={CalendarImg}
            alt="calendario-imagem"
          />

          <p style={{ position: "absolute" }}>
            <span>Durante 30 dias</span>, vamos te ajudar a acompanhar sua vida
            com a dermatite atópica.
          </p>

          <div className="bottom-div-3">
            <img
              alt="pipoca-puppet"
              src={PipocaPuppetV4}
              style={{
                width: "218px",
                height: "204px",
                position: "absolute",
                bottom: "220px",
                right: "3px",
              }}
            />
            <p>
              Ao final dessa jornada vamos poder avaliar juntos como melhorar os
              seus cuidados e sua qualidade de vida.
            </p>
          </div>
        </div>

        <div className="login-container-4">
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />
          <p className="text-4-top">
            E para fazer esse acompanhamento <span>É FÁCIL!</span>
          </p>
          <div className="top-div-4">
            <span>
              <p>
                É só ir na área de registros e contar como você esta se
                sentindo.
              </p>
            </span>
            <img
              alt="pipoca-puppet"
              src={CellImg1}
              style={{
                width: "200px",
                height: "319px",
                position: "absolute",
                bottom: "-34px",
                left: "3px",
              }}
            />
          </div>
          <div className="bottom-div-4">
            <p>
              Aqui você pode nos contar de tudo, desde como está sua pele, seu
              humor, e até quais medicamentos esta usando!
            </p>
            <img
              alt="pipoca-puppet"
              src={CellImg2}
              style={{
                width: "200px",
                height: "319px",
                position: "absolute",
                bottom: "84px",
                right: "3px",
              }}
            />
          </div>
        </div>

        <div className="login-container-5">
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />
          <p className="text-5-top">
            E com esses dados, nós te mostramos a sua{" "}
            <span>jornada e evolução!</span>
          </p>
          <img
            alt="celular-imagem-5"
            src={CellImg5}
            style={{
              width: "192px",
              height: "330px",
              position: "absolute",
              bottom: "235px",
              right: "0",
            }}
          />
          <div className="bottom-div-5">
            <p>
              Além de aprender mais sobre você e sua jornada com a dermatite
              atópica, você ainda pode compartilhar os relatórios com seu médico
              para ele analisar seu tratamento.
            </p>
          </div>
        </div>

        <div className="login-container-6">
          <img
            style={{ width: "106px" }}
            alt="aada-icon"
            src={AadaLogo}
            className="aada-icon"
          />
          <img
            style={{
              width: "38px",
            }}
            alt="muted-icon"
            className="muted-icon"
            src={MutedtIcon}
          />
          <div className="text-6-container">
            <p>
              Vamos começar então?
              <br /> A Pipoca Atópica está animada para te ajudar nesta jornada!{" "}
            </p>
          </div>

          <div className="bottom-div-6">
            <img
              alt="pipoca-puppet"
              src={PipocaPuppetV3}
              style={{
                width: "296px",
                height: "281px",
                position: "absolute",
                bottom: "241px",
                left: "15%",
              }}
            />
          </div>
        </div>
      </Carousel>
    </MainContainer>
  );
};

export default Login;
