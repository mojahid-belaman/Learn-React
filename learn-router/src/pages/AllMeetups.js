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
    return (
        <div>
            <h1>This Is Page AllMeetups!</h1>
            <MeetupList meetups={data} />
        </div>
    );
}

export default AllMeetups;