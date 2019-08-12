import React, { Component } from 'react';
import Buttons from './Buttons';
import InputBox from './InputBox';
import './header.css';

class Header extends Component {

    state = {
        generatedNumber: 1,
        inputValue: 0,
        buttonName: "",
        guessCount: 0,
        standardHighScore: 0,
        expertHighScore: 0,
        userStandardWins: 0,
        userExpertWins: 0
    };

    handleReset = (event) => {
        this.setState({ 
            guessCount: 0,
            userStandardWins: 0,
            userExpertWins: 0 
        });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        console.log("Random Number: " + this.state.generatedNumber);
        var guesses = this.state.guessCount + 1;
        this.setState({ guessCount: guesses });
        if (this.state.inputValue == this.state.generatedNumber) {
            if (this.state.buttonName === "Standard") {
                console.log("b4 standard", this.state.userStandardWins);
                var wins = this.state.userStandardWins + 1;
                console.log("test", wins);
                this.setState({ 
                    userStandardWins: wins,
                    generatedNumber: Math.floor((Math.random() * 10) + 1),
                    guessCount: 0
                });
                console.log("standard", this.state.userStandardWins);
            }
            if (this.state.buttonName === "Expert") {
                this.setState({ 
                    userExpertWins: this.state.userExpertWins + 1,
                    generatedNumber: Math.floor((Math.random() * 10) + 1),
                    guessCount: 0
                });
                console.log("expert", this.state.userExpertWins);
            }
            alert(`You've won the game with ${guesses} guesses. The number has been changed. Play again`);
        }
        else if (this.state.inputValue > this.state.generatedNumber) {
            alert(`Your guess is higher than the random generated number.`);
        }
        else {
            alert(`Your guess is lower than the random generated number.`);
        }

        if (this.state.userStandardWins > this.state.standardHighScore) {
            this.setState({ standardHighScore: this.state.userStandardWins })
            alert(`You beat the highscore, The new highscore is now ${this.state.userStandardWins}.`);
        }
        else if (this.state.userExpertWins > this.state.expertHighScore) {
            this.setState({ expertHighScore: this.state.userExpertWins })
            alert(`You beat the highscore, The new highscore is now ${this.state.userExpertWins}.`);
        }
        // event.preventDefault();
    }


    standardNumber = () => {
        this.setState(
            {
                generatedNumber: Math.floor((Math.random() * 10) + 1),
                buttonName: "Standard" 
            });
    };

    expertNumber = () => {
        this.setState(
            {
                generatedNumber: Math.floor((Math.random() * 100) + 1),
                buttonName: "Expert"
            });
    };



    render() {
        return (
            <div>
                <h1>Start Game</h1>
                <h2>Click Standard or Expert button to choose your game</h2>
                <Buttons buttonName="Standard" generateRandomNumber={this.standardNumber} />
                <Buttons buttonName="Expert" generateRandomNumber={this.expertNumber} />
                { this.state.buttonName === "Standard" && (
                    <div>
                        <p>You have choosen {this.state.buttonName}. Pick a number 1-10</p>
                        <p>You have {this.state.guessCount} guesses so far.</p>
                        <p>The current High Score is {this.state.standardHighScore}</p>
                    </div>
                )}
                { this.state.buttonName === "Expert" && (
                    <div>
                        <p>You have choosen {this.state.buttonName} Pick a number 1-100</p>
                        <p>You have {this.state.guessCount} guesses so far.</p>
                        <p>The current High Score is {this.state.expertHighScore}</p>
                    </div>
                )}
                { this.state.buttonName !== "" && (
                    <InputBox
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleReset={this.handleReset}
                    />
                )}
            </div>
        );
    }
}

export default Header;


/*
Create a guessing game app in React.
When the page loads, display a header that says Start Game and underneath that
 have two buttons. One button should read Standard and the other should read Expert.
If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess.
Expert should be between 1 and 100. Once either of these buttons is clicked, the game starts.
There should be an input for the user to guess a number and submit.
There should be a place that shows how many guesses they have made.
Once the user guesses, tell them whether their guess was too high or too low.
Once the user wins, display a message telling them that they have won and how many guesses it took.
Keep track of the least number of tries it takes the user to win. This is the "High Score". If the user beats their high score, congratulate them.
Keep separate track of the high score for the standard and expert levels.
Have a reset button if the user gets tired of trying.

*/