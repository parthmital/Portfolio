import { useState, useEffect } from 'preact/hooks'
export function Skill({ name, icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="Skill">
            <img src={icon} alt={name} />
            <p className="Font14 FontCenter">{name}</p>
        </a>
    )
}