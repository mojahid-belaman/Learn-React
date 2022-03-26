import { useHistory } from "react-router-dom";
import MeetupForm from "../components/meetups/MeetupForm";

function NewMeetup() {

    const history = useHistory();
    
    function AddMeetupHundler(meetup) {

        fetch('https://learn-react-c02da-default-rtdb.firebaseio.com/meetup.json', 
        {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            history.replace('/');
        })
        
    }

    return (
        <div>
            <h1>Add New Form</h1>
            <MeetupForm onAddMeetup={AddMeetupHundler}/>
        </div>
    );
}

export default NewMeetup;