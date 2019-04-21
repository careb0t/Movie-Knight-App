import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './Navbar.css'

function Navbar(props) {
    let guildButtons = props.guilds.map( guild => {
        return <img key={guild.guild_id} src={guild.guild_icon} className={props.guildOpened.guild_id === guild.guild_id ? "SelectedGuildButton GuildButton" : "GuildButton"} onClick={props.openGuild.bind(guild, guild)}/>
    })
    return (
        <Container fluid className="NavbarContainer">
            <Row>
                <Col xs="8">
                    {guildButtons}
                </Col>
                <Col xs="4" className="UserContainer">
                    <span className="UserText">{props.user.username+"#"+props.user.discriminator}</span>
                    <img src={"https://cdn.discordapp.com/avatars/" + props.user.id + "/" + props.user.avatar} className="UserButton"/>
                    <span className="DownChevy">▾</span>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar