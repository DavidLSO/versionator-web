import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";
import logo from "~/assets/logo.svg";
import { signUpRequest } from "~/store/modules/auth/actions";
const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  email: Yup.string()
    .email("Insira e-mail valido")
    .required("E-mail é Obrigatório"),
  password: Yup.string()
    .required("A senha é obrigatória")
    .min(6, "No mínimo 6 caracteris")
});
function SignUp(props) {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar Conta</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
