import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import { createRef, useEffect, useState } from "react";
import { FormContainer } from "./styles";
import jwt_decode from "jwt-decode";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHomeProvider } from "../../providers/HomeProvider";
import API from "../../services";

const MenuPageConfig = ({ ...props }: { handleSelect: any }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userId, setUserId] = useState<number | null>(null);

  const { setUserNome, userNome } = useHomeProvider();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      let decoded: any = jwt_decode(token);
      setUserName(decoded.unique_name);
      setUserId(decoded.UserId);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      id: null,
      email: "",
      admin: true,
      ativo: true,
      data: new Date().toISOString(),
      nome: userNome,
      senha: "",
    },
    validationSchema: yup.object({
      nome: yup.string(),
      email: yup.string().email("Email inválido"),
      senha: yup.string().min(6, "Mínimo de 6 caracteres"),
    }),
    onSubmit: (values: {
      email: string;
      senha: string;
      nome: string;
      data: string;
      id: number | null;
    }) => {
      if (!values.senha.length) {
        // @ts-ignore
        delete values.senha;
      }

      values.id = userId && parseInt(userId + "", 10);
      values.email = userEmail;
      API.put(`Usuario/${userId}`, values)
        .then((response: { data: { token: string } }) => {
          setUserNome(userName);
        })
        .catch((error: any) => {
          console.log(error);
        });
    },
  });

  const buttonRef = createRef<any>();

  const handleCheck = () => {
    // @ts-ignore
    buttonRef.current.click();
  };

  return (
    <List style={{ marginTop: 161, height: "90%" }}>
      <ListItem
        button
        style={{
          background: "#fff",
          boxShadow: "0px 4px 4px 0px #00000026",
          height: 347,
          textAlign: "center",
        }}
      >
        <FormContainer>
          <h4>Minha Conta</h4>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Nome:&nbsp;</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="email">E-mail: </label>
            <input
              id="email"
              name="email"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            {/* {formik.touched.email && formik.errors.email && (
              <div className="error-msg">{formik.errors.email}</div>
            )} */}
            <label htmlFor="password">Mudar minha senha: </label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <span className="save-box">
              <input type="checkbox" onChange={() => handleCheck()} />
              <label className="label-save">Salvar alterações</label>
            </span>
            <button
              ref={buttonRef}
              type="submit"
              style={{ visibility: "hidden" }}
            ></button>
          </form>
        </FormContainer>
      </ListItem>
    </List>
  );
};

export default MenuPageConfig;
