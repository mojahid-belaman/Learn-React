import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList"

function AllMeetups() {
    const [isLoading, setLoading] = useState(false);
    const [loadMeetup, setMeetup] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetch('https://learn-react-c02da-default-rtdb.firebaseio.com/meetup.json')
        .then((respose) => {
            return respose.json();
        })
        .then((data) => {
            setLoading(false);
            const meetups = [];
            for(const key in data)
            {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setMeetup(meetups);
        })
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    
    return (
        <div>
            <h1>This Is Page AllMeetups!</h1>
            <MeetupList meetups={loadMeetup} />
        </div>
    );
}

export default AllMeetups;