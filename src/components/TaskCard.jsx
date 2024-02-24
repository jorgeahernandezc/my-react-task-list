import React, { useState } from 'react';
import "../assets/styles/styles.css";

export default function TaskCard(props){
    const { id, name, date, place, numberOfPeople, onEdit, onDelete } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState({ name, date, place, numberOfPeople });

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        onEdit(id, editValue);
        setIsEditing(false);
    }

    return(
        <div className="container">
            {isEditing ? 
                <>
                    <input type="text" value={editValue.name} onChange={(e) => setEditValue({...editValue, name: e.target.value})} />
                    <input type="date" value={editValue.date} onChange={(e) => setEditValue({...editValue, date: e.target.value})} />
                    <input type="text" value={editValue.place} onChange={(e) => setEditValue({...editValue, place: e.target.value})} />
                    <input type="number" value={editValue.numberOfPeople} onChange={(e) => setEditValue({...editValue, numberOfPeople: e.target.value})} />
                </>
                : 
                <>
                    <p>Nombre: {name}</p>
                    <p>Fecha: {date}</p>
                    <p>Lugar: {place}</p>
                    <p>Numero de personas: {numberOfPeople}</p>
                </>
            }
            {isEditing ? 
                <button onClick={handleSave} className="buttonEmoji">💾</button> 
                : 
                <button onClick={handleEdit} className="buttonEmoji">✏️</button>
            }
            <button onClick={() => onDelete(id)} className="buttonEmoji">🗑️</button>
        </div>
    )
}