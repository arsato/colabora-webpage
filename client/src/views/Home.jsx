import { useContext } from "react";
import Context from "../Context";

const Home = () => {
  const { usuario, setUsuario: setUsuarioGlobal } = useContext(Context);
  return (
    <main className="">
      <div className="container mx-auto">
        <h2 className="flex justify-center text-5xl font-bold">Buenos días a todos, el matinal de Chile</h2>
      </div>
    </main>
  )
}

export default Home;