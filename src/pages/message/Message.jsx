import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

const Message = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='message'>
      <div className="container">
      <span className="breadcrumbs">PUPPYLAND &gt; <Link to='/messages'>MY MESSAGES</Link> &gt; JOHN DOE</span>
        <div className="title">
          <h1>John Doe</h1>
        </div>
        <hr />
        <div className="messages">
          <div className="item">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
          <div className="item owner">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
          <div className="item">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
          <div className="item owner">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
          <div className="item">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
          <div className="item owner">
            <img src="https://avatars.githubusercontent.com/u/59196382?v=4" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequuntur non qui, odio necessitatibus cumque, vitae quos maxime iste aliquam sit laudantium ea dolor tempore esse voluptas! Magni, deserunt in.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="Write a message..." id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message