// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const SubmitFunction = props => {
  const {commentDetails, onDeleteButton, onLikeButton} = props
  const {id, username, commentInput, isLike, date, background} = commentDetails
  const time = formatDistanceToNow(date)
  console.log(id)
  const image = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDelete = () => {
    onDeleteButton(id)
  }

  const onClickLikeButton = () => {
    onLikeButton(id)
  }

  return (
    <li>
      <div className="button-details">
        <div className="user-deatils">
          <div className={`container ${background}`}>
            <p className="span-heading">{username[0].toUpperCase()}</p>
          </div>
          <p className="user-para">{username}</p>
          <p className="user-para1">{time}</p>
        </div>
        <p className="comment-para">{commentInput}</p>
        <button
          type="button"
          className="like-button"
          onClick={onClickLikeButton}
        >
          <img src={image} alt="like" />
        </button>
      </div>
      <button
        type="button"
        className="like-button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default SubmitFunction
