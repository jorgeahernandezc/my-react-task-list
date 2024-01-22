import "../assets/styles/styles.css"

export default function Input(props){
const {placeholder} = props;

    return (
        <input className="inputText" type="text" placeholder={placeholder} />
    )
}