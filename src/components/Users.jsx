export function Users({ activeTurn, users, setUsers }) {
  function focusOutX(e) {
    console.log(e);
    if (e.target.value) {
      setUsers((state) => {
        const newState = { ...state };
        newState.xname = e.target.value;
        return newState;
      });
    }
  }

  function focusOutO(e) {
    console.log(e);
    if (e.target.value) {
      setUsers((state) => {
        const newState = { ...state };
        newState.oname = e.target.value;
        return newState;
      });
    }
  }

  function userNameDisplay() {
    if (users.xname && users.oname) {
      if (activeTurn === "X") {
        return users.xname;
      } else {
        return users.oname;
      }
    } else {
      return activeTurn;
    }
  }

  return (
    <>
      <div>
        {users.xname ? (
          <span className="m-4">{`${users.xname} is X`}</span>
        ) : (
          <label className="m-4" htmlFor="playerX">
            Name for X:
            <input onBlur={focusOutX} id="playerX" type="text" />
          </label>
        )}
        {users.oname ? (
          <span className="m-4">{`${users.oname} is O`}</span>
        ) : (
          <label htmlFor="playerO">
            Name for O:
            <input onBlur={focusOutO} id="playerO" type="text" />
          </label>
        )}
      </div>
      <p className="m-4">Next turn is for: {userNameDisplay()}</p>
    </>
  );
}
