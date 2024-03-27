import classes from './newsletter-registration.module.css';
import { useRef, useContext } from 'react';
import NotificationContext from '../../store/context';

function NewsletterRegistration() {
	const { showNotification } = useContext(NotificationContext);
	const email = useRef();
	async function registrationHandler(event) {
		event.preventDefault();
		showNotification({
			title: 'signing up',
			message: 'Registering for Newsletter',
			status: 'pending',
		});
		const body = { email: email.current.value };
		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				body: JSON.stringify(body),
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();
			if (!response.ok) {
				throw new Error(data.message);
			}

			showNotification({
				title: 'Success',
				message: 'Successfully restarted to newsletter!!!',
				status: 'success',
			});
		} catch (err) {
			showNotification({
				title: 'Error',
				message: err.message || 'something went wrong',
				status: 'error',
			});
		}
	}

	return (
		<section className={classes.newsletter}>
			<h2>Sign up to stay updated!</h2>
			<form onSubmit={registrationHandler}>
				<div className={classes.control}>
					<input
						type='email'
						id='email'
						placeholder='Your email'
						aria-label='Your email'
						ref={email}
					/>
					<button>Register</button>
				</div>
			</form>
		</section>
	);
}

export default NewsletterRegistration;
