export default function Button(props){
    const {texto} = props;
    return (
        <button type="button">{texto} </button>
    )
}