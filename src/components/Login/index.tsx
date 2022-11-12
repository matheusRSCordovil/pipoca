import { MainContainer } from "./styles";
import NextIcon from "../../assets/icon/play.fill.svg";
import AadaLogo from "../../assets/icon/logo-aada.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useHomeProvider } from "../../providers/HomeProvider";
import jwt_decode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const { setUserNome, setAtivo } = useHomeProvider();

  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const getToken = () => {
    let token = localStorage.getItem("token");
    return token;
  };

  useEffect(() => {
    let token = getToken();

    if (token) {
      navigate("/");
    }

    let timer1 = setTimeout(() => setIsLoading(false), 500);
    return () => {
      clearTimeout(timer1);
    };

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
          localStorage.setItem("token", response.data.token);
          let decoded: any = jwt_decode(response.data.token);
          setUserNome(decoded.unique_name);
          setAtivo("hoje");
          navigate("/");
        })
        .catch((error: any) => {
          if (error.response.status === 401) {
            setError(true);
          }
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

        <span
          style={{ display: "flex", flexDirection: "column", marginTop: 190 }}
        >
          <p className="text-login-8">Que bom te ver por aqui de novo!</p>

          <p className="text-sub-login-8">
            {" "}
            Vamos voltar a percorrer esta jornada?
          </p>
        </span>

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

            {formik.touched.email && formik.errors.email && (
              <div className="error-msg">{formik.errors.email}</div>
            )}

            <label htmlFor="senha">Senha:</label>
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

            {error && (
              <div className="error-msg">Usuário ou senha inválidos</div>
            )}

            <button type="submit">
              Entrar <img alt="next-icon" src={NextIcon} />
            </button>
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
