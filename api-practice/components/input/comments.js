import {useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';


function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([])

  async function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
    if(!showComments) {
      const response = await fetch(`/api/events/${eventId}/comments`)
      const data = await response.json()
      setComments(data.comments)
    }
  }

  async function addCommentHandler(commentData) {
    console.log(commentData)
    // TODO:
    // send data to API
    const response = await fetch(`/api/events/${eventId}/comments`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments}/>}
    </section>
  );
}

export default Comments;
