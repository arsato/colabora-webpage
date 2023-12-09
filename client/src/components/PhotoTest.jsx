import React, { useState } from "react";
import axios from "axios";

const UserForm = () => {
  const [usuario, setUsuario] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const url = "http://localhost:3000";

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const handleUpload = async () => {
    const endpoint = "/upload";
    if (file) {
      const data = new FormData();
      data.append("image", file);
      data.append("github", usuario["github"]);
      data.append("linkedin", usuario["linkedin"]);
      data.append("position", usuario["position"]);
      data.append("userId", usuario["userId"]);
      try {
        setLoading(true);
        let res = await axios.post(url + endpoint, data);
        setRes(res.data)
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>UserForm</h1>
      <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
        <div className="flex flex-col">
        <input
            value={usuario.userId}
            onChange={handleSetUsuario}
            name="userId"
            type="text"
            id="userId"
            placeholder="userId"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            value={usuario.github}
            onChange={handleSetUsuario}
            name="github"
            type="text"
            id="github"
            placeholder="Github"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            value={usuario.linkedin}
            onChange={handleSetUsuario}
            name="linkedin"
            type="text"
            id="linkedin"
            placeholder="Linkedin"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            value={usuario.position}
            onChange={handleSetUsuario}
            name="position"
            type="text"
            id="position"
            placeholder="Cargo"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            onClick={handleUpload}
            type="submit"
            className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
          >
          {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
