import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import Carousel from "../re-carousel-master/src/carousel";
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useHomeProvider } from "../../providers/HomeProvider";
import IndicatorDots from "./indicator-dots";

const Register = () => {
  const navigate = useNavigate();

  const { userNome, setUserNome } = useHomeProvider();

  const [isLoading, setIsLoading] = useState(true);

  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    getToken();
    let timer1 = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const formik = useFormik({
    initialValues: {
      senha: "",
      repeatSenha: "",
      email: "",
      nome: userNome,
      admin: false,
      ativo: true,
    },
    validationSchema: yup.object({
      email: yup.string().required("O campo é obrigatório."),
      senha: yup
        .string()
        .min(6, "mínimo de 6 caracteres")
        .required("O campo é obrigatório."),
      repeatSenha: yup
        .string()
        .required("O campo é obrigatório.")
        .oneOf([yup.ref("senha"), null], "senhas não conferem"),
    }),
    onSubmit: (values: { email: string; senha: string; nome: string }) => {
      values.nome = userNome;
      axios
        .post(
          "https://pipocaatopica.jelastic.saveincloud.net/api/Usuario/Cadastro",
          values
        )
        .then((response: { data: { token: string } }) => {
          navigate("/login");
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  });

  return (
    <MainContainer>
      <Carousel widgets={[IndicatorDots]}>
        <div
          className="login-container"
          style={{
            minHeight: "865px",
            width: isLoading ? "900px" : "100vw",
            height: "100%",
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
              onChange={(e) => setUserNome(e.target.value)}
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
            <h4>Oi {userNome},</h4>
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

        <div className="login-container-7">
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
          <p className="text-login-7">
            Mas antes de começar nossa jornada, gostaríamos de saber qual{" "}
            <span>e-mail</span> e a <span>senha</span> deseja colocar aqui, para
            fazermos o seu cadastro.
          </p>

          <div className="bottom-div-7">
            <form id="form1" onSubmit={formik.handleSubmit}>
              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                type="email"
                placeholder="E-mail"
              />

              {formik.touched.email && formik.errors.email && (
                <div className="error-msg">{formik.errors.email}</div>
              )}

              <label htmlFor="password">Senha:</label>
              <input
                id="senha"
                name="senha"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.senha}
                type="password"
                placeholder="Senha"
              />

              {formik.touched.senha && formik.errors.senha && (
                <div className="error-msg">{formik.errors.senha}</div>
              )}

              <input
                id="repeatSenha"
                name="repeatSenha"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatSenha}
                type="password"
                placeholder="Confirmar senha"
              />
            </form>

            {formik.touched.repeatSenha && formik.errors.repeatSenha && (
              <div className="error-msg">{formik.errors.repeatSenha}</div>
            )}

            <p style={{ marginTop: 30 }}>
              Você receberá um e-mail para confirmar seu cadastro, ok?
            </p>
            <p>
              {" "}
              Assim, mesmo que troque de celular, você sempre terá acesso aos
              seus registros!
            </p>
          </div>
        </div>
      </Carousel>
    </MainContainer>
  );
};

export default Register;
