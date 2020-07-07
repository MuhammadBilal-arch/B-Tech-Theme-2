import React, { PureComponent } from 'react'
import GameCard from "./GameCard/GameCard"
import classes from "./Game.module.css"
class Games extends PureComponent {

    state =
        {
            data:
                [
                    {
                        CardID: 1,
                        Heading: "Batman",
                        ImageURL: "./Assets/Batman.jpg"
                    },
                    {
                        CardID: 2,
                        Heading: "Superman",
                        ImageURL: "./Assets/Superman.jpg"
                    },
                    {
                        CardID: 3,
                        Heading: "Spiderman",
                        ImageURL: "./Assets/Spiderman.jpg"
                    },
                    {
                        CardID: 2,
                        Heading: "Superman",
                        ImageURL: "./Assets/Superman.jpg"
                    },
                    {
                        CardID: 3,
                        Heading: "Spiderman",
                        ImageURL: "./Assets/Spiderman.jpg"
                    },
                    {
                        CardID: 1,
                        Heading: "Batman",
                        ImageURL: "./Assets/Batman.jpg"
                    },
                    {
                        CardID: 4,
                        Heading: "Antman",
                        ImageURL: "./Assets/Antman.jpg"
                    },
                    {
                        CardID: 4,
                        Heading: "Antman",
                        ImageURL: "./Assets/Antman.jpg"
                    }
                ]
        }

    render() {

        return (
            <div className={classes.GameBox}>
                <GameCard>
                    {this.state.data}
                </GameCard>
            </div>
        )
    }
}

export default Games
