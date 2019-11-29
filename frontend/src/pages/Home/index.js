import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./styles.css";

export default function Home({ history }) {
  const name = localStorage.getItem("name");
  const [enrolls, setEnrolls] = useState([]);

  function logout(event) {
    event.preventDefault();

    localStorage.removeItem("user_id");
    history.push("/");
  }

  useEffect(() => {
    async function loadSubjects() {
      const user = localStorage.getItem("user_id");
      const response = await api.get("/enroll", {
        headers: {
          user_id: user
        }
      });
      setEnrolls(response.data);
    }

    loadSubjects();
  }, []);

  return (
    <>
      <h2>Bem vindo {name}</h2>
      <button className="btn-admin" onClick={logout}>
        Logout
      </button>
      <br />
      <ul className="enrolls-list">
        {enrolls.map(enroll => (
          <li key={enroll.subject._id}>
            <span>
              <strong>{enroll.subject.name}</strong> - {enroll.subject.cod}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
