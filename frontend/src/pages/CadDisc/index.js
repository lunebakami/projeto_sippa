import React, { useState } from "react";
import api from "../../services/api";

export default function CadDisc({ history }) {
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");

  function back() {
    history.push("/admin");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = { name, cod };

    const response = await api.post("/subject", data);

    if (response) {
      console.log("Disciplina cadastrada com sucesso");
    } else {
      console.log("Erro ao cadastrar disciplina");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          placeholder="Insira o nome da disciplina"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <br />
        <label htmlFor="cod">Código:</label>
        <input
          type="text"
          id="cod"
          placeholder="Insira o código da disciplina"
          value={cod}
          onChange={event => setCod(event.target.value)}
        />
        <br />

        <button className="btn" type="submit">
          Cadastrar
        </button>
        <button className="backBtn" onClick={back}>
          Voltar
        </button>
      </form>
    </>
  );
}
