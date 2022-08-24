import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MainContainer } from "./styles";
import NextIcon from "../../assets/icon/play.fill.svg";
import PipocaPuppet from "../../assets/img/pipoca-puppet.png";
import MutedtIcon from "../../assets/img/speaker.png";
import Ellipse from "../../assets/img/ellipse-19.png";
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
          style={{
            backgroundColor: "#1391ED",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${Ellipse})`,
            backgroundPositionX: "center",
            backgroundPositionY: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <p>Olá!</p>

          <p>Bem-vindo à Jornada da Pipoca Atópica! </p>

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
            }}
          />
          <img
            alt="pipoca-puppet"
            src={PipocaPuppet}
            style={{ width: "292px", height: "248px", margin: "0 auto" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "blue",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <img
            alt="dasdasd"
            src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"
          />
        </div>
        <div
          style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <img
            alt="asdd"
            src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"
          />
        </div>
        <div
          style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <img
            alt="asdd"
            src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"
          />
        </div>
        <div
          style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <img
            alt="asdd"
            src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"
          />
        </div>
        <div
          style={{
            backgroundColor: "green",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="muted-icon"
            src={MutedtIcon}
            style={{
              width: "38px",
              height: "39px",
              position: "absolute",
              right: "20px",
              top: "20px",
            }}
          />
          <img
            alt="asdd"
            src="https://media.moddb.com/images/members/5/4550/4549205/duck.jpg"
          />
        </div>
      </Carousel>
    </MainContainer>
  );
};

export default Login;
