import { useState, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/context'

function Comments(props) {
	const { eventId } = props;
  const { showNotification } = useContext(NotificationContext);

	const [showComments, setShowComments] = useState(false);
	const [comments, setComments] = useState([]);
	const [commentLoading, setCommentLoading] = useState(false);

	async function toggleCommentsHandler() {
		setShowComments((prevStatus) => !prevStatus);
		if (!showComments) {
			const response = await fetch(`/api/events/${eventId}/comments`);
			const data = await response.json();
			setComments(data.comments);
		}
	}

	async function addCommentHandler(commentData) {
		setCommentLoading(true);
		try {
			const response = await fetch(`/api/events/${eventId}/comments`, {
				method: 'POST',
				body: JSON.stringify(commentData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const {message, comment} = await response.json();
			if (!response.ok) {
				throw new Error(message);
			}

      setComments((privState) => ([
          ...privState,
          {...comment}
      ]))

			showNotification({
				title: 'Success',
				message: 'Successfully restarted to newsletter!!!',
				status: 'success',
			});
      setCommentLoading(false)
		} catch (err) {
			showNotification({
				title: 'Error',
				message: err.message || 'something went wrong',
				status: 'error',
			});
      setCommentLoading(false)
		}
	}

	return (
		<section className={classes.comments}>
			<button onClick={toggleCommentsHandler}>
				{showComments ? 'Hide' : 'Show'} Comments
			</button>
			{showComments && <NewComment onAddComment={addCommentHandler} />}
			{showComments && <CommentList comments={comments} />}
			{commentLoading && <div className={classes.loadingSkeleton}></div>}
		</section>
	);
}

export default Comments;
