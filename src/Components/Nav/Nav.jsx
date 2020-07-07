import React, { Component } from 'react'
import classes from "./Nav.module.css"
import { NavLink } from "react-router-dom"
export default class Nav extends Component {
    render() {
        return (
            <nav className={classes.NavBar}>
                    <NavLink exact to='/' className = {classes.Link} activeClassName={classes.activeLink}>Home</NavLink>
                    <NavLink to='/portfolio' className = {classes.Link} activeClassName={classes.activeLink}>About</NavLink>
                    <NavLink to='/services'className = {classes.Link} activeClassName={classes.activeLink}>Services</NavLink>
                    <NavLink to='/skills' className = {classes.Link} activeClassName={classes.activeLink}>Skills</NavLink>
                    <NavLink to='/contact' className = {classes.Link} activeClassName={classes.activeLink}>Contact</NavLink>
            </nav>
        )
    }
}
