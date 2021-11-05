import React from "react";
import "./button.css";

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--solid--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--primary--outline",
    "btn--primary--outline",
    "btn--primary--outline",
]

const SIZES = ["btn--medium", "btn--small"]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button onClick={onClick} className={'btn ${setButtonStyle} ${setButtonSize}'} type={type}>
            {children}
        </button>
    );
};