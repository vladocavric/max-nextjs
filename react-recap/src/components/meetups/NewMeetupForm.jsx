import React, {useRef} from 'react';
import Card from '../ui/Card';
import styles from './NewMeetupForm.module.scss';
const apiKey = import.meta.env.VITE_FB_API;


const NewMeetupForm = () => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    const handleSubmit = e => {
        e.preventDefault()
        const title = titleInputRef.current.value
        const image = imageInputRef.current.value
        const address = addressInputRef.current.value
        const description = descriptionInputRef.current.value

        const meetupData = {
            title,
            image,
            address,
            description
        }

        console.log(meetupData, apiKey)
    }
	return (
		<Card>
			<form className={styles.form} onSubmit={handleSubmit}> 
				<div className={styles.control}>
					<label htmlFor='title'>Meetup Title</label>
					<input type='text' required id='title' ref={titleInputRef}/>
				</div>
				<div className={styles.control}>
					<label htmlFor='image'>Meetup Image</label>
					<input type='url' required id='image' ref={imageInputRef}/>
				</div>
				<div className={styles.control}>
					<label htmlFor='address'>Meetup Address</label>
					<input type='text' required id='address' ref={addressInputRef}/>
				</div>
				<div className={styles.control}>
					<label htmlFor='description'>Meetup Description</label>
					<textarea cols='30' rows='4' id='description' required ref={descriptionInputRef}></textarea>
				</div>
				<div className={styles.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
