import React,{ useState} from 'react'
import CommentForm from './CommentForm';
import Wrapper from '../../assets/wrappers/Comments';
import { useAppContext } from '../../context/appContext';
import Comment from './Comment';

const Comments = ({url}) => {

    const [activeComment, setActiveComment] = useState(null);
    const {user,createComment,totalComments,updateUserComment,deleteUserComment} = useAppContext()
    const currentUserId = user._id

    const rootComments = totalComments.filter(
        (backendComment) => !backendComment.parentId && backendComment.url === url
      );

    //console.log('ROOT',rootComments)

     //check the date subtraction 
    const getReplies = (commentId) =>    totalComments.filter((backendComment) => 
    backendComment.parentId === commentId).sort((a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );  

    const addComment = async(text, parentId) => {
        await createComment({user,text,parentId,url})
        setActiveComment(null);
    };  

    const updateComment = (text,id,parentId) => { 
          updateUserComment({text,id,parentId,user})
          setActiveComment(null);  
      };

      const deleteComment = (commentId) => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
          deleteUserComment({commentId})
        }
      };

  return (
    <Wrapper>
        <div className="comments">
            <h3 className="comments-title">Comments</h3>
            <div className="comment-form-title">Add comment</div>
                <CommentForm submitLabel="Submit" handleSubmit={addComment} />
                <div className="comments-container">
                {rootComments.map((rootComment) => (
                    <Comment
                        key={rootComment._id}
                        comment={rootComment}
                        replies={getReplies(rootComment._id)}
                        activeComment={activeComment}
                        setActiveComment={setActiveComment}
                        addComment={addComment}
                        deleteComment={deleteComment}
                        updateComment={updateComment}
                        currentUserId={currentUserId}
          />
        ))}
      </div>
            </div>
    </Wrapper>
    )
  
}

export default Comments
