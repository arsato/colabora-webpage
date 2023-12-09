import React, { useContext, useState } from "react";
import axios from "axios";
import Context from "../Context";

const UserForm = () => {
  const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);
  const [userData, setUserData] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({});
  const url = "http://localhost:3000";

  const handleSetUserData = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUserData({ ...userData, ...field });
  };

  const handleUpload = async () => {
    const endpoint = `/users/${usuario.userId}`;
    const data = new FormData();
    if (file) {
      const imageId = usuario.additional_info.publicId;
      data.append("image", file);
      data.append("imageId", imageId);
    }
    if(userData["github"])
    data.append("github", `https://www.github.com/${userData["github"]}`);
    if(userData["linkedin"])
    data.append("linkedin", `https://www.linkedin.com/in/${userData["linkedin"]}`);
    if(userData["position"])
    data.append("position", userData["position"]);

    try {
      setLoading(true);
      let res = await axios.patch(url + endpoint, data);
      setRes(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>UserForm</h1>
      <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
        <div className="flex flex-col">
          <input
            value={userData.github}
            onChange={handleSetUserData}
            name="github"
            type="text"
            id="github"
            placeholder="https://www.github.com/"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            value={userData.linkedin}
            onChange={handleSetUserData}
            name="linkedin"
            type="text"
            id="linkedin"
            placeholder="https://www.linkedin.com/in/"
            className="border border-gray-300 rounded-xl p-4 pl-6"
          />
          <input
            value={userData.position}
            onChange={handleSetUserData}
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
