import React from "react";
import { Link } from "react-router-dom";

export const KataCard = ({ name, languages }) => {
    return (
        <div className="kata-card">
            <h3 className="kata-card-name">{name}</h3>
            <p className="kata-card-languages">{languages}</p>
        </div>
    );
}