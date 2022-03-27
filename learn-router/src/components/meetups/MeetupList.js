import classes from "./MeetupList.module.css"
import MeetupItem from "./MeetupItem"

function MeetupList(props) {
    return (
        <ul>
            {props.meetups.map((el) => 
                        <MeetupItem 
                            key={el.id}
                            id={el.id}
                            img={el.image}
                            title={el.title}
                            address={el.address}
                            description={el.description}
                        />
            )}
        </ul>
    );
}

export default MeetupList