import { useSelector, useDispatch } from 'react-redux';
import { assignPlayer } from '../store/slice';

export function Users({ activeTurn, winner }) {
  const users = useSelector(state => state.todo.players);
  const dispatch = useDispatch();
  function focusOutX(e) {
    if (e.target.value) {
      dispatch(assignPlayer({symbol: 'X', name:e.target.value}));
    }
  }

  function focusOutO(e) {
    if (e.target.value) {
      dispatch(assignPlayer({symbol: 'O', name:e.target.value}));
    }
  }

  function nextTurnUserNameDisplay() {
    if (users.X && users.O) {
      if (activeTurn === "X") {
        return users.X;
      } else {
        return users.O;
      }
    } else {
      return activeTurn;
    }
  }

  function userNameDisplay(name) {
    if (users.X && users.O) {
     return name === "X" ? users.X : users.O;
    } else {
      return name;
    }
  }

  return (
    <>
      <div>
        {users.X ? (
          <span className="m-4">{`${users.X} is X`}</span>
        ) : (
          <label className="m-4" htmlFor="playerX">
            Name for X:
            <input onBlur={focusOutX} id="playerX" type="text" />
          </label>
        )}
        {users.O ? (
          <span className="m-4">{`${users.O} is O`}</span>
        ) : (
          <label htmlFor="playerO">
            Name for O:
            <input onBlur={focusOutO} id="playerO" type="text" />
          </label>
        )}
      </div>
      {!winner && <p className="m-4">Next turn is for: {nextTurnUserNameDisplay()}</p>}
      {winner && <p className="m-4">Winner is: {userNameDisplay(winner)}</p>}
    </>
  );
}
