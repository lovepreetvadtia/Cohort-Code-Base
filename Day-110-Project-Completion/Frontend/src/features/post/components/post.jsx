import React from 'react'

const Post = ({user,post,loading , HandleLike, HandleUnLike}) => {
  return (
    <div className='post'>
      <div className='upper'>
        <div className="imgWrapper">
            <img height='34' width='34' src={user?.profileImg} alt="" />
        </div>
        <div><p>{user?.username}</p></div>
      </div>
      <div className="middle">
        <img src={post?.imgUrl} alt="" />
      </div>
      <div className="bottom">
        <div className="up">
            <div className="left">
                <button><svg className={post.isLiked?"like":""}
                onClick={()=>{post.isLiked?HandleUnLike(post._id):HandleLike(post._id)}}
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.76282 17H20V5H4V18.3851L5.76282 17ZM6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455Z"></path></svg></button>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 2.9997V4.9997H4V18.9997H20V9.9997H22V19.9997C22 20.552 21.5523 20.9997 21 20.9997H3C2.44772 20.9997 2 20.552 2 19.9997V3.9997C2 3.44742 2.44772 2.9997 3 2.9997H9ZM18.9497 4.9997L16 2.04996L17.4142 0.635742L22.7539 5.97544C22.9882 6.20975 22.9882 6.58965 22.7539 6.82397C22.6414 6.93649 22.4888 6.9997 22.3296 6.9997H14C12.8954 6.9997 12 7.89513 12 8.9997V14.9997H10V8.9997C10 6.79056 11.7909 4.9997 14 4.9997H18.9497Z"></path></svg></button>
            </div>
            <div className="right">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path></svg>
              </button>
            </div>
        </div>
        <div className="down">
            <p>{post?.caption}</p>
        </div>
      </div>
    </div>
  )
}

export default Post
