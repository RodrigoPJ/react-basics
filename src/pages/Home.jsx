import { Link } from "react-router";
import { Username } from "../components/Username";
import { useSelector } from "react-redux";

export function Home() {
  const user = useSelector((state) => state.todo.username);

  return (
    <div style={{ textAlign: "center" }}>
      {!user && <h1>Home</h1>}
      {user && <h1>Welcome, {user}!</h1>}
      <h2>This is an app with router and redux!</h2>
      <h3>
        We have a todo list and tic tac toe, feel free to use whichever you like
        more
      </h3>
      <button style={{ margin: "10px" }}>
        <Link to={"todo"}>Todo list</Link>
      </button>
      <button style={{ margin: "10px" }}>
        <Link to={"tictactoe"}>Tic tac toe</Link>
      </button>
      <button style={{ margin: "10px" }}>
        <Link to={"products"}>Products</Link>
      </button>
      {!user && (
        <div>
          <Username />
        </div>
      )}
    </div>
  );
}
