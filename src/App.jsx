import React, { createContext, useState, useEffect } from 'react';
import './App.css'
import Container from './components/Container'

export const EventContext = createContext();

function App() {
  // Intenta recuperar la lista del localStorage al inicializar el estado
  const [lista, setLista] = useState(() => {
    const storedLista = localStorage.getItem('lista');
    return storedLista ? JSON.parse(storedLista) : [];
  });

  // Guarda la lista en el localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(lista));
  }, [lista]);

  return (
    <EventContext.Provider value={{ lista, setLista }}>
      <Container/>
    </EventContext.Provider>
  )
}

export default App;