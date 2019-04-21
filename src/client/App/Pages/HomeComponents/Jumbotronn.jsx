import React from 'react'
import { Jumbotron } from 'reactstrap'
import './Jumbotronn.css'

function Jumbotronn() {
    return(
        <Jumbotron fluid className="Jumbotron">
            <img className="Logo" src='./src/client/App/Assets/movieknight.png' alt=""/>
            <h1>MovieKnight</h1>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=558039744718569492&permissions=8&scope=bot">
                <button>Invite MovieKnight to your server</button>
            </a>
            <a href="https://discordapp.com/api/oauth2/authorize?client_id=558039744718569492&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flogin&response_type=code&scope=identify">
                <button>Log in with Discord</button>
            </a>
        </Jumbotron>    
    )
}

export default Jumbotronn