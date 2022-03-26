import { useRef } from 'react';
import classes from './MeetupForm.module.css';

function MeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHundler(e) {
        e.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetup = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        };

        props.onAddMeetup(meetup);
    }

    return (
        <form className={classes.form} onSubmit={submitHundler}>
            <div className={classes.title}>
                <label htmlFor='title'>Meetup Title</label>
                <input type="text" id='title' required placeholder='Enter Title...' ref={titleInputRef} /> 
            </div>
            <div className={classes.img}>
                <label htmlFor='img'>Meetup Image</label>
                <input type='url' id='img' required  ref={imageInputRef}/> 
            </div>
            <div className={classes.address}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' required placeholder='Enter Address...' ref={addressInputRef}/> 
            </div>
            <div className={classes.desc}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' rows='5' ref={descriptionInputRef}></textarea>   
            </div>
            <div className={classes.btn}>
                <button>Add Meetup</button>
            </div>
        </form>
    );
}

export default MeetupForm;