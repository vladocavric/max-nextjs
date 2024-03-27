import classes from './comment-list.module.css';
import { useRouter } from 'next/router';

function CommentList(props) {
	const { comments } = props;
	const router = useRouter();
	const { eventId } = router.query;
	const onDeleteHandler = async (id) => {
		const response = await fetch(`/api/events/${eventId}/comments/${id}`, {
			method: 'DELETE',
		});
		const data = await response.json();
	};
	const onEditHandler = async (id) => {
		console.log('edit', id);
	};
	return (
		<ul className={classes.comments}>
			{comments.map((comment) => {
				return (
					<li key={comment._id}>
						<p>{comment.text}</p>
						<div>
							By <address>{comment.name}</address>
						</div>
						<button
							onClick={onDeleteHandler.bind(null, comment._id)}>
							delete
						</button>
						<button onClick={onEditHandler.bind(null, comment._id)}>
							edit
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default CommentList;
