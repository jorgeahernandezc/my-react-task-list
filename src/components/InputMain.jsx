import "../assets/styles/styles.css";
import Input from "./Input";
import Button from './Button';

export default function InputMain(){
    return (
        <div className = "containerInput">
            <Input placeholder="Ingrese una tarea"/> 
            <Button className="ButtonPlus" texto="+"/>
        </div>
    )
}