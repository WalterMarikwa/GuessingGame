import React from 'react';
import './header.css';

// click = () => {
//     this.props.generateRandomNumber
// }
const Buttons = props => (
    <div>
        <button onClick = {props.generateRandomNumber}>{props.buttonName}</button>
    </div>
);

export default Buttons;
