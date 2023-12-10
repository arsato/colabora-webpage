import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../components/LoadingButton";
import axios from "axios";
import Alert from "../components/Alert";
import Context from "../Context";

const LogInMain = () => {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const navigate = useNavigate();
  const [usuarioLocal, setUsuarioLocal] = useState({
    email: "asandoval@mail.com",
    password: "123456",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const toSignUp = () => navigate("/signup");

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuarioLocal, ...field });
  };

  const url = "http://localhost:3000";

  const inicioSesion = async () => {
    setLoading(true);
    const endpoint = "/login";
    const { email, password } = usuarioLocal;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data } = await axios.post(url + endpoint, usuarioLocal);
      localStorage.setItem("token", data.token);
      await getUserData(data.id);
      navigate("/services");
    } catch (e) {
      console.log(e.response.data.error);
      setError(e.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async (id) => {
    const userInfoEndpoint = `/users/${id}`;
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(url + userInfoEndpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setError(null);
  }

  return (
    <main className="container mx-auto grid grid-cols-1 items-center px-6 py-6 md:px-24 md:py-20">
      <section className="mx-auto">
        {error ? <Alert error={error} handleClick={handleClick} /> : (
          <div></div>
        )}
        <form
          className="bg-white p-8 w-auto text-lg rounded-xl md:drop-shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col">
            <input
              value={usuarioLocal.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuarioLocal.password}
              onChange={handleSetUsuario}
              type="password"
              name="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            {!loading ? (
              <button
                onClick={inicioSesion}
                className="hover:cursor-pointer bg-sky-400 hover:bg-sky-500 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
              >
                Iniciar sesión
              </button>
            ) : (
              <LoadingButton className="hover:cursor-not-allowed text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl p-4 mt-5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-500 items-center hover:scale-[1.02] ease-in-out duration-300" message={"Iniciando sesión..."} />
            )}
            <p className="text-center text-sky-400 hover:text-sky-500 font-medium text-base mt-5 hover:cursor-pointer">
              ¿Has olvidado la contraseña?
            </p>
            <div className="border-solid border-t-2 border-gray-300 mt-5"></div>
            <button
              onClick={toSignUp}
              className="bg-green-400 hover:bg-green-500 self-center px-6 font-medium rounded-xl text-white p-4 mt-8 hover:scale-[1.02] ease-in-out duration-300"
            >
              Crear cuenta nueva
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default LogInMain;
