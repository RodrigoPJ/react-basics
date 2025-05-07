import { createBrowserRouter } from "react-router-dom";
import { TodoList } from "../pages/TodoList";
import { Home } from "../pages/Home";
import { TicTacToe } from "../pages/TicTacToe";
import { RootLayout } from "../components/RootLayout";
import { Products } from "../pages/Products";
import { StopLights } from "../pages/StopLights";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "todo", element: <TodoList /> },
      { path: "tictactoe", element: <TicTacToe /> },
      { path: "products", element: <Products /> },
      { path: "stoplights", element: <StopLights /> },
    ],
  },
]);

export default router;
