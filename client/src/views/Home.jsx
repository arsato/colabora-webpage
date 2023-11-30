import Editor from "../lexical/Editor";
import Reader from "../lexical/Reader";

const Home = () => {
  return (
    <main className="flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold">
          Buenos días a todos
        </h2>

        <Reader />
    </main>
  );
};

export default Home;
