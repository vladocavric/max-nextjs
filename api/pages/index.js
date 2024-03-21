import { useRef, useState } from 'react';
function HomePage() {
  const [feedbacks, setFeedbacks] = useState([]);
	const emailInputRef = useRef();
	const feedbackRef = useRef();

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		const email = emailInputRef.current.value;
		const feedback = feedbackRef.current.value;
    const body = {
      email, feedback
    }
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
	};

  const getFeedback = async () => {
    const response = await fetch('/api/feedback')
    const data = await response.json()
    setFeedbacks(data.feedback)
  }

	return (
		<div>
			<h1>The Home Page</h1>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' ref={emailInputRef} />
				</div>
				<div>
					<label htmlFor='feedback'>Email</label>
					<textarea
						cols='30'
						rows='10'
						id='feedback'
						ref={feedbackRef}></textarea>
				</div>
				<button>submit</button>
			</form>
      <hr/>
      <button onClick={getFeedback}>Get Feedback</button>
      <hr/>
      {!!feedbacks.length && <ul>
        {feedbacks.map(({id, email, feedback}) => <li key={id}>{feedback}</li>)}
        </ul>}
		</div>
	);
}

export default HomePage;
