
import "../assets/styles/styles.css";

export default function TaskCard(){


    const handleEditar = ()=>{
        console.log("Hey me dieron click")
    }
    return(



        <div className="container">
            <label>
                <input type="radio"/> Tarea 
            </label>
            <button onClick={handleEditar}
            className="buttonEmoji"
            > ✏️</button>
            <button onClick={handleEditar}
            className="buttonEmoji"
            > 🗑️</button>
            
        </div>
    )
}