import { useRef, useState } from 'react';

function HomePage() {
	const [feedbacks, setFeedbacks] = useState([]);
	const emailRef = useRef();
	const feedbackRef = useRef();

	const formSubmitHandler = async (e) => {
		e.preventDefault();
		const email = emailRef.current.value;
		const feedback = feedbackRef.current.value;
		const body = { email, feedback };
		const request = await fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await request.json();
	};

	const getFeedbacksHandler = async () => {
		const response = await fetch('/api/feedback');
		const data = await response.json();
		setFeedbacks(data.feedbacks);
	};
	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={formSubmitHandler}>
				<div>
					<label htmlFor='email'>Email</label>
					<br />
					<input
						type='email'
						name='email'
						id='email'
						ref={emailRef}
					/>
				</div>
				<div>
					<label htmlFor='feedback'>Feedback</label>
					<br />
					<textarea
						cols='30'
						rows='10'
						name='feedback'
						id='feedback'
						ref={feedbackRef}></textarea>
				</div>
				<button>submit</button>
			</form>
			<hr />
			<button onClick={getFeedbacksHandler}>get all feedbacks</button>
			<hr />
			{!!feedbacks.length && (
				<ul>
					{feedbacks.map(({ id, feedback }) => (
						<li key={id}>{feedback}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default HomePage;
