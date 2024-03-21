import {getFilePath, getFileData} from '../api/feedback'
import { useState } from 'react';
export default function FeedbacksPage(props) {
    const [feedback, setFeedback] = useState();
	const {feedbacks} = props;
    const getDetailsHandler = async (id) => {
        const response = await fetch(`/api/${id}`)
        const {feedback} = await response.json()
        setFeedback(feedback)
    }
	return (
		<>
        {feedback && <div>{feedback.email}</div>}
			{!!feedbacks.length && (
				<ul>
					{feedbacks.map(({ id, email, feedback }) => (
						<li key={id}>{feedback} <button onClick={getDetailsHandler.bind(null, id)}>get details</button></li>
					))}
				</ul>

			)}
		</>
	);
}

export function getStaticProps() {
    const filePath = getFilePath()
    const feedbacks = getFileData(filePath)
    return {
        props: {
            feedbacks
        }
    }
}