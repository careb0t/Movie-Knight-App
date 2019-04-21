import React from 'react'

function Main(props) {
    let guildImages = props.guilds.map(guild => {
        return <img key={guild.guild_icon} src={guild.guild_icon} alt=""/>
    })
    if (props.loading === false && props.invalid_code === false) return (
        <div>
        <h1>Name is {props.user.username}#{props.user.discriminator} ({props.user.id})</h1>
        <img src={"https://cdn.discordapp.com/avatars/" + props.user.id + "/" + props.user.avatar} alt=""/>
        <h1>You are in {props.guilds.length} guilds featuring Movie Knight!</h1>
        {guildImages}
        <h1>List of guilds:</h1>
        <ul>
            {
            props.guilds.map(guild => (
                <li>Name: {guild.guild_name}
                <ul>
                    <li>ID: {guild.guild_id}</li>
                    <li>Prefix: {guild.guild_prefix}</li>
                </ul>
                </li>
            ))
            }
        </ul>
        </div>
    )
    if (props.invalid_code === true) return (
        <div>
            <h1>Invalid code!</h1>
        </div>
    )
    return (
        <h1>Loading!</h1>
    )        
}

export default Main