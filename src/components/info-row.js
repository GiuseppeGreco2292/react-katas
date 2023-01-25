import React from "react";

export const InfoRow = ({ type, value }) => {
    const label = type.charAt(0).toUpperCase() + type.slice(1);;
    let content = value;

    switch (type) {
        case 'source':
            content = <a href={value.url}>{value.title}</a>
            break;
        default:
            break;
    }

    return (
        <p>
            <span className="infobox-info-type">{label}: </span>
            <span className="infobox-info-value">
                {content}
            </span>
        </p>
    );
}

function hasNestedProperty(haystack, needle) {



}