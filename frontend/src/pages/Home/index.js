import React, { useEffect, useState } from "react";
import api from "../../services/api";

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
      <ul className="enrolls-list">
        {enrolls.map(enroll => (
          <li key={enroll.subject._id}>
            <span>
              <strong>{enroll.subject.name}</strong> - {enroll.subject.cod}
            </span>
          </li>
        ))}
      </ul>

      <br />
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </>
  );
}
