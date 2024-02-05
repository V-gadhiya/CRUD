import axios from "axios";
import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://659d0773633f9aee79086f1c.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  function handleDelete(id) {
    axios
      .delete(`https://659d0773633f9aee79086f1c.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }

  return (
    <div>
      <div className="form-check form-switch">
        <input
          className="form-check-input my-2 mx-5"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>

      <div className="d-flex justify-content-between m-4">
        <h1>Read Operation</h1>
        <Link to="/">
          <button className="btn btn-secondary ">Create Data</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>

        {data.map((e) => {
          return (
            <>
              <tbody>
                <tr key={e.id}>
                  <th scope="row">{e.id}</th>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() => setLocalStorage(e.id, e.name, e.email)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
