import React, { Component } from 'react'
import classes from "./Nav.module.css"
export default class Nav extends Component {
    render() {
        return (
            <nav className={classes.NavBar}>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Skill</li>
                    <li>Education</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
    }
}
