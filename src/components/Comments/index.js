import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import SubmitFunction from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentList: [],
    username: '',
    commentInput: '',
  }

  onChangeInput = event => {
    this.setState({username: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({commentInput: event.target.value})
  }

  onClickAddSubmit = event => {
    event.preventDefault()
    const {commentInput, username} = this.state
    const getBackgroundColor = `initialBackground ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      username,
      commentInput,
      isLike: false,
      date: new Date(),
      background: getBackgroundColor,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      username: '',
      commentInput: '',
    }))
  }

  onDeleteButton = commentId => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(each => each.id !== commentId),
    })
  }

  onLikeButton = commentId => {
    // const {commentList} = this.state
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (commentId === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each.isLike
      }),
    }))
  }

  render() {
    const {username, commentInput, commentList} = this.state
    console.log(commentList)
    return (
      <div className="bg-container">
        <div className="input-container">
          <form className="comment-container" onSubmit={this.onClickAddSubmit}>
            <h1 className="comment-heading">Comments</h1>
            <p className="comment-description">
              Say Something about 4.0 Technologies
            </p>
            <input
              type="search"
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeInput}
              value={username}
            />
            <textarea
              rows="8"
              cols="45"
              placeholder="Your Comment"
              className="text-area"
              onChange={this.onChangeTextArea}
              value={commentInput}
            />

            <button type="submit">Add Comment</button>
          </form>
          {/* <div className="img-container"> */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="img"
          />
          {/* </div> */}
        </div>
        <hr className="line" />
        <ul>
          <p className="comments-description">
            <span className="length">{commentList.length}</span>
            Comments
          </p>
          {commentList.map(each => (
            <SubmitFunction
              commentDetails={each}
              key={each.id}
              onDeleteButton={this.onDeleteButton}
              onLikeButton={this.onLikeButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
