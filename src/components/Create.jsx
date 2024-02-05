import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "") {
      alert("Please enter a name");
    } else if (email === "") {
      alert("Please enter a email");
    } else {
      axios
        .post("https://659d0773633f9aee79086f1c.mockapi.io/crud", {
          name: name,
          email: email,
        })

        .then(() => {
          history("./read");
        });
    }
  };

  return (
    <div>
      <form>
        <div className="d-flex justify-content-between m-2">
          <h1>Create </h1>
          <Link to="/read">
            <button className="btn btn-primary">Show data</button>
          </Link>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
