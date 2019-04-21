import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './GuildInfo.css'

function GuildInfo(props) {
    return (
        <div className="GuildInfoContainer">
            <img src={props.guildOpened.guild_icon} alt="" className="GuildInfoIcon"/>
            <h4 className="GuildInfoName">{props.guildOpened.guild_name}</h4>
            <h6 className="GuildInfoMembers">{props.guildOpened.user_list.length} members</h6>
            <Container fluid className="GuildInfoDetails">
                <ul>
                    <li>Prefix: {props.guildOpened.guild_prefix}</li>
                    <li>{props.guildOpened.request_list.length} movies listed</li>
                    <li>Cooldown: {props.guildOpened.movie_cooldown} days</li>
                </ul>
            </Container>
        </div>
    )
}

export default GuildInfo