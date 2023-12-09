import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../components/Alert";

const SignUpMain = () => {
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({});
  const [error, setError] = useState(null);

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const url = "http://localhost:3000";

  const registroUsuario = async () => {
    const endpoint = "/users";
    const { firstName, lastName, email, password } = usuarioLocal;
    try {
      if (!firstName || !lastName || !email || !password)
        return alert("Todos los campos son obligatorios");
      console.log(usuarioLocal)
      await axios.post(url + endpoint, usuarioLocal);
      alert("Usuario registrado con éxito 😀");
      navigate("/login");
    } catch (e) {
      setError(e.response.data.error);
    }
  };

  return (
    <main className="container mx-auto grid grid-cols-1 md:items-center px-6 py-6 md:px-24 md:py-20">
      <section className="mx-auto">
      {error ? <Alert error={error} /> : (
          <div></div>
        )}
        <form onSubmit={(e) => e.preventDefault()} className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md">
          <div className="flex flex-col">
            <input
              value={usuarioLocal.firstName}
              onChange={handleSetUsuario}
              name="firstName"
              type="text"
              id="first-name"
              placeholder="Nombre"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuarioLocal.lastName}
              onChange={handleSetUsuario}
              name="lastName"
              type="text"
              id="last-name"
              placeholder="Apellidos"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuarioLocal.email}
              onChange={handleSetUsuario}
              name="email"
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuarioLocal.password}
              onChange={handleSetUsuario}
              name="password"
              type="password"
              id="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
            onClick={registroUsuario}
              type="submit"
              value="Regístrate"
              className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
            ></input>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SignUpMain;
