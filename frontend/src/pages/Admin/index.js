import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Admin({ history }) {
  function logout(event) {
    event.preventDefault();

    localStorage.removeItem("user");
    history.push("/");
  }

  return (
    <>
      <div>
        <h1>Admin</h1>
        <br />
        <Link to="/new_aluno">
          <button className="btn-admin">Cadastrar Aluno</button>
        </Link>
        <br />
        <Link to="/new_disc">
          <button className="btn-admin">Cadastrar Disciplina</button>
        </Link>
        <br />
        <Link to="/matricular_aluno">
          <button className="btn-admin">Matricular Aluno</button>
        </Link>
        <br />
        <button className="btn-admin" onClick={logout}>
          Logout
        </button>
      </div>
    </>
  );
}
