import React, { useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function MatriculaaAluno({ history }) {
  const [matricula, setMatricula] = useState("");
  const [subject, setSubject] = useState("");

  function back() {
    history.push("/admin");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const cod = subject;
    const sub_response = await api.post("/sub", { cod });

    const usr_response = await api.post("/aut", { matricula });

    const usr = usr_response.data.user._id;
    const sub = sub_response.data.subject._id;

    const data = {
      user_id: usr,
      subject_id: sub
    };

    const response = await api.post("/enroll", data);

    if (response) {
      alert("Aluno matriculado com sucesso");
    } else {
      alert("Erro ao matricular aluno");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="matricula">Matricula:</label>
        <input
          type="text"
          id="matricula"
          placeholder="Insira a matricula do aluno"
          value={matricula}
          onChange={event => setMatricula(event.target.value)}
        />
        <br />

        <label htmlFor="subject">Código da Disciplina:</label>
        <input
          type="text"
          id="subject"
          placeholder="Insira a disciplina do aluno"
          value={subject}
          onChange={event => setSubject(event.target.value)}
        />
        <br />

        <button className="btn" type="submit">
          Matricular
        </button>
        <button className="backBtn" onClick={back}>
          Voltar
        </button>
      </form>
    </>
  );
}
