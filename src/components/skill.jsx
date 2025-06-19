import { useState, useEffect } from 'preact/hooks'
export function Skill({ name, icon }) {
    return (
        <div className="Skill">
            <img src={icon} />
            <p className="Font14 FontCenter">{name}</p>
        </div>
    )
}