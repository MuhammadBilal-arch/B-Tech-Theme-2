import React from 'react'
import classes from "./Skills.module.css"
import Games from "./Games/Games"
const Home = () => {
    return (
        <div className={classes.SkillBox}>
          <Games/>
          {/* Skills */}
        </div>
    )
}

export default Home
