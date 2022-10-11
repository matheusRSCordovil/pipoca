import { MainContainer } from "./styles";
// import NextIcon from "../../assets/icon/play.fill.svg";
import AadaLogo from "../../assets/icon/logo-aada.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    let token = getToken();

    if (token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      senha: "",
      email: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("O campo é obrigatório."),
      senha: yup.string().required("O campo é obrigatório."),
    }),
    onSubmit: (values: { email: string; senha: string }) => {
      axios
        .post(
          "https://pipocaatopica.jelastic.saveincloud.net/api/Autenticar/login",
          values
        )
        .then((response: { data: { token: string } }) => {
          console.log(response);
          localStorage.setItem("token", response.data.token);
          navigate("/");
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  });

  return (
    <MainContainer>
      <div className="login-container-7">
        <img
          style={{ width: "106px" }}
          alt="aada-icon"
          src={AadaLogo}
          className="aada-icon-login"
        />

        <p className="text-login-8">Que bom te ver por aqui de novo!</p>

        <p className="text-sub-login-8">
          {" "}
          Vamos volta a percorrer esta jornada?
        </p>

        <div className="bottom-div-7">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              id="senha"
              name="senha"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.senha}
              type="senha"
              placeholder="Senha"
            />
            <button type="submit">Login</button>
          </form>

          <p>Esqueci minha senha</p>

          <p className="no-login-text" onClick={() => navigate("/register")}>
            Ainda não tenho login
          </p>
        </div>
      </div>
    </MainContainer>
  );
};

export default Login;
