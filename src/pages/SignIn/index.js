import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { signInRequest } from "~/store/modules/auth/actions";

const schema = Yup.object().shape({
  username: Yup.string().required("Username é Obrigatório"),
  password: Yup.string().required("A senha é obrigatória"),
});
function SignIn(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ username, password }) {
    dispatch(signInRequest(username, password));
  }

  return (
    <>
      <h1>Versionator</h1>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="username" type="text" placeholder="Seu username" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">{loading ? "Carregando ..." : "Acessar"}</button>
      </Form>
      <span>Login demo: demo</span>
      <br></br>
      <span>Password demo: 12345678</span>
    </>
  );
}

export default SignIn;
