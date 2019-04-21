import React from 'react'
import './AlertBox.css'

function AlertBox(props) {
    if (props.alert.type === "success") return (
        <div className="AlertContainer">
            <span className="AlertText">{props.alert.title} ({props.alert.year.slice(0, 4)}) added to movie list for {props.alert.guild_name}!</span><span className="AlertCloseButton" onClick={props.closeAlert}>❌</span>
        </div>
    )

    if (props.alert.type === "duplicate") return (
        <div className="AlertContainer">
            <span className="AlertText">{props.alert.title} ({props.alert.year.slice(0, 4)}) is already on the movie list for {props.alert.guild_name}!</span> <span className="AlertCloseButton" onClick={props.closeAlert}>❌</span>
        </div>
    )
    if (props.alert.type === undefined) return null
}

export default AlertBox