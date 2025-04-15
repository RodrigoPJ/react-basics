import { Link } from "react-router"

export function Home() {
    return(
    <div style={{textAlign: 'center'}}>
        <h1>Home</h1>
        <h2>This is an app with router and redux!</h2>
        <h3>We have a todo list and tic tac toe, feel free to use whichever you like more</h3>
        <button style={{margin: '10px'}}><Link to={'todo'}>Todo list</Link></button>
        <button><Link to={'tictactoe'}>Tic tac toe</Link></button>
    </div>
    )
}
