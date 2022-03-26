
function SocialsItems(props) {
    
    return (
        <li>
            <img src={props.img} />
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id}>{props.text}</label>
        </li>
    );
}

export default SocialsItems;