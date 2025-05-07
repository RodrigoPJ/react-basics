import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

import { pages } from '../utils/navBar';

export function Header() {
  const username = useSelector(state => state.todo.username);
    return (
    <header className='header'>
      <nav>
        <ul className='list'>
          {pages.map(e => {
            return(<li key={e.name}>
              <NavLink to={e.url}>{e.name}</NavLink>
            </li>)
          })}
        </ul>
        {username && <h3 style={{textAlign: "right"}} >User: {username}</h3>}
      </nav>
    </header>
    )
}