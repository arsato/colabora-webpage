import React, { useContext, useEffect, useState } from "react";
import Context from "../Context";
import Alert from "./Alert";
import getUserData from "../utils/getUserData";
import updateData from "../utils/updateData";
import LoadingButton from "./LoadingButton";
import FormSkeleton from "./FormSkeleton";

const UserData = () => {
  const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);
  const [userData, setUserData] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [updated, setUpdated] = useState(true);
  const [res, setRes] = useState({});
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdated(false)
    updateData(usuario, userData, "user").then(async (data) => {
      setRes(data.data);
      setError(data.data.message);
      await getUserData(usuario.userId).then((data) => {
        setUserData({
          ...userData,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });
        setUsuarioGlobal(data);
      });
      setUpdated(true);
    })
  };

  const handleClick = () => {
    setError(null);
  };

  useEffect(() => {
    getUserData(usuario.userId).then((data) => {
      setUserData({
        ...userData,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
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
            <h2 className="text-center text-lg mb-6 font-medium">Mis Datos</h2>
            <div className="flex flex-col xl:flex-row items-center justify-between mb-6">
              <label htmlFor="firstName" className="hidden xl:block">
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Nombre"
                value={userData.firstName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="lastName" className="hidden xl:block">
                Apellidos
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Apellidos"
                value={userData.lastName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="email" className="hidden xl:block">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                readOnly
                className="border text-gray-400 border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
              />
            </div>

            <div className="flex items-center justify-between mb-6">
              <label htmlFor="password" className="hidden xl:block mr-[-33px]">
                Nueva <br /> Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                placeholder="Nueva Contraseña"
                onChange={handleInputChange}
                className="border border-gray-300 rounded-xl p-4 pl-6 h-12 w-full xl:w-5/6"
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

export default UserData;
