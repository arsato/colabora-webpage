import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import getUserData from "../utils/getUserData";
import updateData from "../utils/updateData";
import Alert from "./Alert";
import FormSkeleton from "./FormSkeleton";
import LoadingButton from "./LoadingButton";

const ExtraData = () => {
  const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);
  const [extraData, setExtraData] = useState({});
  const [file, setFile] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(true);
  const [res, setRes] = useState({});
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExtraData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdated(false);
    updateData(usuario, extraData, "extra", file).then(async (data) => {
      setRes(data.data);
      setError(data.data.message);
      setFile(null);
      await getUserData(usuario.userId).then((data) => {
        setExtraData({
          ...extraData,
          description: data.extra_info.description,
          github: data.extra_info.github,
          linkedin: data.extra_info.linkedin,
          position: data.extra_info.position,
          secureUrl: data.extra_info.secureUrl,
        });
        setUsuarioGlobal(data);
      });
      setUpdated(true);
    });
  };

  const handleClick = () => {
    setError(null);
  };

  useEffect(() => {
    getUserData(usuario.userId).then((data) => {
      setExtraData({
        ...extraData,
        description: data.extra_info.description,
        github: data.extra_info.github,
        linkedin: data.extra_info.linkedin,
        position: data.extra_info.position,
        secureUrl: data.extra_info.secureUrl,
      });
      setUsuarioGlobal(data);
      setLoaded(true);
    });
  }, []);

  return (
    <div>
      {loaded ? (
        <form
          onSubmit={handleUpdate}
          className="bg-white mx-6 my-8 p-8 xl:w-1/2 xl:mx-auto rounded-xl md:drop-shadow-md"
        >
          <div className="flex flex-col">
            <h2 className="text-center text-lg mb-6 font-medium">Información Adicional</h2>
            <img
              className="mx-auto mb-6 w-[100px] h-[100px] rounded-[15px]"
              src={extraData.secureUrl}
            />
            <div className="flex flex-col xl:flex-row items-center justify-between mb-6">
              <label htmlFor="description" className="hidden xl:block">
                Descripcion
              </label>
              <input
                type="text"
                id="description"
                name="description"
                placeholder="Descripcion personal"
                value={extraData.description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="position" className="hidden xl:block">
                Cargo
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={extraData.position}
                placeholder="Cargo"
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="github" className="hidden xl:block">
                Github
              </label>
              <input
                type="text"
                id="github"
                name="github"
                value={extraData.github}
                placeholder="https://www.github.com/"
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="linkedin" className="hidden xl:block">
                LinkedIn
              </label>
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                value={extraData.linkedin}
                placeholder="https://www.linkedin.com/in/"
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="image" className="hidden xl:block">
                Imagen
              </label>
              <input
                type="file"
                name="image"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            {updated ? (
              <button
                onClick={handleUpdate}
                type="submit"
                className="hover:cursor-pointer bg-sky-400 hover:bg-sky-500 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
              >
                Guardar Cambios
              </button>
            ) : (
              <LoadingButton
                className="hover:cursor-not-allowed text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl p-4 mt-5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-500 items-center hover:scale-[1.02] ease-in-out duration-300"
                message={"Actualizando la informacion..."}
              />
            )}
            {error ? (
              <Alert error={error} handleClick={handleClick} />
            ) : (
              <div></div>
            )}
          </div>
        </form>
      ) : (
        <FormSkeleton />
      )}
    </div>
  );
};

export default ExtraData;
