import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList"

const data = [
    {
        id: '1',
        img: 'https://picsum.photos/600/300',
        title: 'First Title',
        address: 'First Address',
        description: 'First Description'
    },
    {
        id: '2',
        img: 'https://picsum.photos/600/300',
        title: 'First Title',
        address: 'First Address',
        description: 'First Description'
    },
    {
        id: '3',
        img: 'https://picsum.photos/600/300',
        title: 'First Title',
        address: 'First Address',
        description: 'First Description'
    },
];

function AllMeetups() {
    const [isLoading, setLoading] = useState(false);
    const [loadMeetup, setMeetup] = useState([]);

    useEffect(() => {
        fetch('https://learn-react-c02da-default-rtdb.firebaseio.com/meetup.json')
        .then((respose) => {
            return respose.json();
        })
        .then((data) => {
            setLoading(true)
            setMeetup(data);
        })
        console.log('useEffect');
    }, [loadMeetup]);
    return (
        <div>
            <h1>This Is Page AllMeetups!</h1>
            <MeetupList meetups={data} />
        </div>
    );
}

export default AllMeetups;