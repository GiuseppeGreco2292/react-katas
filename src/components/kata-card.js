import React from "react";

export const KataCard = ({ id, name, languages, handleClick, isActive }) => {
    const activeClass = isActive ? 'kata-card-active' : '';
    return (
        <div className={`kata-card ${activeClass}`} onClick={() => handleClick(id)} >
            <h3 className="kata-card-name">{name}</h3>
            <p className="kata-card-languages">{languages}</p>
        </div>
    );
}