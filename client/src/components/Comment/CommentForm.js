import React,{useState} from 'react'
import Wrapper from '../../assets/wrappers/Comments';
import { useAppContext } from '../../context/appContext';
import {Alert} from '../../components'

const CommentForm = ({handleSubmit,submitLabel,hasCancelButton = false,handleCancel,initialText = "",}) => {
    const {showAlert,isLoading} = useAppContext()
    const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  
  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };

  return (
    <Wrapper>
    <form onSubmit={onSubmit}>
    {showAlert && <Alert/>}
    <textarea
      className="comment-form-textarea"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
    <button className="comment-form-button" disabled={isTextareaDisabled||isLoading}>
      {submitLabel}
    </button>
    {hasCancelButton && (
      <button
        type="button"
        className="comment-form-button comment-form-cancel-button"
        onClick={handleCancel}
      >
        Cancel
      </button>
    )}
  </form>
  </Wrapper>
  )
}

export default CommentForm