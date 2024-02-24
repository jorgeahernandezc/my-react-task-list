import React, { useState, useEffect, useContext } from 'react';
import TaskCard from './TaskCard';
import { EventContext } from '../App'; // Importa el contexto
function TaskList() {
  const { lista, setLista } = useContext(EventContext); // Usa el contexto

  const [evento, setEvento] = useState({
    id: "",
    name: "",
    date: "",
    place: "",
    numberOfPeople: ""
  });

  useEffect(() => {
    const storedEvents = localStorage.getItem('events');
    if (storedEvents) {
      setLista(JSON.parse(storedEvents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(lista));
  }, [lista]);

  const handleInputChange = (e) => {
    setEvento({
      ...evento,
      [e.target.name]: e.target.value
    });
  }

  const handleAddEvent = () => {
    setLista([...lista, evento]);
    setEvento({
      id: "",
      name: "",
      date: "",
      place: "",
      numberOfPeople: ""
    });
  }

  const handleEditEvent = (id, updatedEvent) => {
    setLista(lista.map(event => event.id === id ? updatedEvent : event));
  }

  const handleDeleteEvent = (id) => {
    setLista(lista.filter(event => event.id !== id));
  }

  return (
    <>
      <div className="containerInput">
        <input type="text" name="id" placeholder="ID del evento" value={evento.id} onChange={handleInputChange} />
        <input type="text" name="name" placeholder="Nombre" value={evento.name} onChange={handleInputChange} />
        <input type="date" name="date" value={evento.date} onChange={handleInputChange} />
        <input type="text" name="place" placeholder="Lugar" value={evento.place} onChange={handleInputChange} />
        <input type="number" name="numberOfPeople" placeholder="Número de personas" value={evento.numberOfPeople} onChange={handleInputChange} />
        <button onClick={handleAddEvent}>Agregar evento</button>
      </div>
      <div>
        {lista.map((event) => (
          <TaskCard 
            key={event.id} 
            id={event.id} 
            name={event.name} 
            date={event.date} 
            place={event.place} 
            numberOfPeople={event.numberOfPeople} 
            onEdit={handleEditEvent} 
            onDelete={handleDeleteEvent} 
          />
        ))}
      </div>
    </>
  )
}

export default TaskList;