import React, { useContext } from 'react';
import "../assets/styles/styles.css";
import Header from "./Header";
import TaskList from "./TaskList";
import { EventContext } from '../App';

export default function Container (){
    const { lista, setLista } = useContext(EventContext); 

    return (
        <>
            <Header/>
            <TaskList lista={lista}/>
        </>
    )
}