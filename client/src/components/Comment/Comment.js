
import CommentForm from './CommentForm';
import icon from '../../assets/jpeg/user-icon.png'

const Comment = ({comment,replies,setActiveComment,activeComment,updateComment,deleteComment,addComment,
    parentId = null,
    currentUserId,
  }) => {

    const isEditing = activeComment &&  activeComment.id === comment._id && activeComment.type === "editing";
    const isReplying = activeComment &&  activeComment.id === comment._id && activeComment.type === "replying";
  
    const canReply = Boolean(currentUserId);
    const canDelete = currentUserId === comment.userId 
    const canEdit = currentUserId === comment.userId 
    const replyId = parentId ? parentId : comment._id;
    const createdAt = new Date(comment.createdAt).toLocaleDateString();
    
    return (
        <div key={comment._id} className="comment">
        <div className="comment-image-container">
         <img src={icon} alt=''/>
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{comment.username}</div>
            <div className='comment-time'>{createdAt}</div>
          </div>
          {!isEditing && <div className="comment-text">{comment.text}</div>}
          {isEditing && (
            <CommentForm
              submitLabel="Update"
              hasCancelButton
              initialText={comment.text}
              handleSubmit={(text) => updateComment(text, comment._id)}
              handleCancel={() => {  setActiveComment(null); }}
            />
          )}
          <div className="comment-actions">
            {canReply && (
              <div
                className="comment-action"
                onClick={() =>  setActiveComment({ id: comment._id, type: "replying" })}
              >
                 Reply
              </div>
            )}
            {canEdit && (
              <div
                className="comment-action"
                onClick={() =>  setActiveComment({ id: comment._id, type: "editing" })}
              >
                Edit
              </div>
            )}
            {canDelete && (
              <div
                className="comment-action"
                onClick={() => deleteComment(comment._id)}
              >
                Delete
              </div>
            )}
          </div>
          {isReplying && (
            <CommentForm
              submitLabel="Reply"
              handleSubmit={(text) => addComment(text, replyId)}
            />
          )}
          {replies.length > 0 && (
            <div className="replies">
              {replies.map((reply) => (
                <Comment
                  comment={reply}
                  key={reply._id}
                  setActiveComment={setActiveComment}
                  activeComment={activeComment}
                  updateComment={updateComment}
                  deleteComment={deleteComment}
                  addComment={addComment}
                  parentId={comment.id}
                  replies={[]}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Comment;