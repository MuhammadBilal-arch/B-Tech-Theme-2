import React, { Component } from 'react'
import classes from "./GameCard.module.css"

export class GameCard extends Component {

    state = {
        OldCardIndex: null,
        Attempts: 3
    }


    GameCardHandler = (NewCardID, NewCardIndex) => {
        const { OldCardIndex ,Attempts} = this.state;
        const data = this.props.children
        console.log("Data array Length " + data.length);
        this.setState({ OldCardIndex: NewCardIndex });
        if (NewCardIndex === OldCardIndex && NewCardIndex !== null) {
            alert("You are pressing same card. | New Index : " + NewCardIndex + "  Old Index : " + OldCardIndex);
            return true;
        }
        if (OldCardIndex !== null) {
            if (data[OldCardIndex].CardID === data[NewCardIndex].CardID) {
                const index = data[NewCardIndex].CardID;
                console.log(index)
                for (var j = 0; j < 2; j++) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].CardID === index) {
                            console.log(data[i].CardID)
                            console.log(i)
                            data.splice(i, 1)
                        }
                    }
                }
                this.setState({ OldCardIndex: null });
                return true;
            }
            if (data[OldCardIndex].CardID !== data[NewCardIndex].CardID)
            {
                Attempts === 0?
                alert("You are failed.\n Game Over.")                
                :this.setState({ Attempts: Attempts - 1 });
            }
        }

        console.log(data)

    }
    render() {
        const data = this.props.children
        return (
            <section className={classes.GameSection}>
            <h1>Attempts Left {this.state.Attempts}</h1>            
            <div className={classes.GameCardHead}>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index * 2} className={classes.GameCard} onClick={() => this.GameCardHandler(item.CardID, index)}>
                                <h2>{item.Heading}</h2>
                                <img src={item.ImageURL} alt="" />
                            </div>
                        )
                    })
                }
            </div>
            </section>
        )
    }
}


export default GameCard
