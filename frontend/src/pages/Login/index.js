import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function Login({ history }) {
  const [matricula, setMatricula] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { matricula };

    const response = await api.post("/aut", data);
    const user = response.data.user;

    if (user) {
      if (user.password === password) {
        localStorage.setItem("user_id", user._id);
        localStorage.setItem("name", user.name);
        if (user.typeUser === 1) {
          history.push("/home");
        } else if (user.typeUser === 2) {
          //
        } else {
          history.push("/Admin");
        }
      } else {
        console.log("senha incorreta");
      }
    } else {
      console.log("nao existe");
    }
  }

  return (
    <>
      <h2>Sistema de Matriculas de Alunos</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="matricula">Matricula:</label>
          <input
            className="a"
            type="text"
            id="matricula"
            placeholder="Insira sua matricula"
            value={matricula}
            onChange={event => setMatricula(event.target.value)}
          />
          <br />

          <label htmlFor="password">Senha:</label>
          <input
            className="a"
            type="password"
            id="password"
            placeholder="insira sua senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <br />

          <button className="btn-login" type="submit">
            Entrar
          </button>
        </fieldset>
      </form>
    </>
  );
}
