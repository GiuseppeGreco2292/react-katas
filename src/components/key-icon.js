import React from "react";

export const KeyIcon = (props) => {
    return (
        <p className="key-display">
            <span className="key-icon">{props.keyboard}</span>
            <span className="key-explanation">{props.explanation}</span>
        </p>
    );
}