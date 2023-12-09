import React from "react";

const UserForm = () => {
    const [usuario, setUsuario] = useState({});
    const url = "http://localhost:3000";

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuario({ ...usuario, ...field });
      };
      const registroUsuario = async () => {
        const endpoint = "/usuario";
        const { firstName, lastName, email, password } = usuario;
        try {
          if (!firstName || !email || !password)
            return alert("Todos los campos son obligatorios");
          await axios.post(url + endpoint, usuario);
          alert("Usuario registrado con éxito 😀");
          navigate("/login");
        } catch (error) {
          setError(error.response.data);
        }
      };

  return (
    <div>
      <h1>UserForm</h1>
      <form action="/profile" method="post" enctype="multipart/form-data" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col">
            <input
              value={usuario.firstName}
              onChange={handleSetUsuario}
              name="firstName"
              type="text"
              id="name"
              placeholder="Nombre"
              className="border border-gray-300 rounded-xl p-4 pl-6"
            />
            <input
              value={usuario.lastName}
              onChange={handleSetUsuario}
              name="lastName"
              type="text"
              id="last-name"
              placeholder="Apellidos"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuario.email}
              onChange={handleSetUsuario}
              name="email"
              type="email"
              id="email"
              placeholder="Correo electrónico"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <input
              value={usuario.password}
              onChange={handleSetUsuario}
              name="password"
              type="password"
              id="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-xl p-4 pl-6 mt-5"
            />
            <button
            onClick={registroUsuario}
              type="submit"
              value="Regístrate"
              className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
            ></button>
            <input type="file" name="avatar" />
          </div>
      </form>
    </div>
  );
};

export default UserForm;
