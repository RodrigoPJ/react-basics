import { createBrowserRouter } from "react-router-dom";
import { TodoList } from "../pages/TodoList";
import { Home } from "../pages/Home";
import { TicTacToe } from "../pages/TicTacToe";
import { RootLayout } from "../components/RootLayout";
import { Products } from "../pages/Products";

const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    children: [
        { index: true, element: <Home />},
        { path: 'todo', element: <TodoList />},
        { path: 'tictactoe', element: <TicTacToe /> },
        { path: 'products', element: <Products />}
    ]
}]);

export default router;