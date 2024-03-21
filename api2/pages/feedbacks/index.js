import { useState } from 'react';
import { getFilePath, getFileData } from '../api/feedback';

export default function FeedbacksPage(props) {
    const [feedback, setFeedback] = useState();
	const { feedbacks } = props;
	const getDetailsHandler = async (id) => {
        const response = await fetch(`/api/feedback/${id}`)
        const data = await response.json()
       setFeedback(data)
    };
	return (
		<>
        {feedback && <h1>{feedback.email}</h1>}
			{!!feedbacks?.length && (
				<ul>
					{feedbacks.map(({ id, feedback }) => (
						<li key={id}>
							{feedback}{' '}
							<button onClick={getDetailsHandler.bind(null, id)}>
								get details
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export function getStaticProps() {
	const filePath = getFilePath();
	const data = getFileData(filePath);
	return {
		props: {
			feedbacks: data,
		},
	};
}
