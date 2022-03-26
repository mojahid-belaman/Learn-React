import classes from "./MeetupItem.module.css"
import Card from "../ui/Card";

function MeetupItem(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={classes.content}>
                    <h2>{props.title}</h2>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.btn}>
                    <button>To Favorites</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;