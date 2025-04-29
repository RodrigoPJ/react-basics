import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

export function Header() {
  const username = useSelector(state => state.todo.username);
    return (
    <header className='header'>
      <nav>
        <ul className='list'>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="todo">Todo</NavLink>
          </li>
          <li>
            <NavLink to="tictactoe">Tic Tac Toe</NavLink>
          </li>
        </ul>
        {username && <h3 style={{textAlign: "right"}} >User: {username}</h3>}
      </nav>
    </header>
    )
}