import { NavLink } from 'react-router';

export function Header() {
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
      </nav>
    </header>
    )
}