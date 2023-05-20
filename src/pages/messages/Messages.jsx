import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Messages.scss'

const Messages = () => {

  const currentUser = {
    id: 1,
    username: "Noor",
    isOwner: true
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis molestias voluptatem error.`

  return (
    <div className='my-messages'>
      <div className="container">
      <span className="breadcrumbs">PUPPYLAND &gt; MY MESSAGES</span>
        <div className="title">
          <h1>My Messages</h1>
        </div>
        <hr />
        <table>
          <tr>
            <th>Owner</th>
            <th>Last message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td>
              <Link to='/message/123'>{message.substring(0,100)}...</Link>
            </td>
            <td>2 days ago</td>
            <td>
              <FontAwesomeIcon title="Mark as read" className='faIcon' icon={faEnvelopeOpen} /></td>
          </tr>
          <tr className='active'>
            <td>
              John Doe
            </td>
            <td>
              <Link to='/message/123'>{message.substring(0,100)}...</Link>
            </td>
            <td>2 days ago</td>
            <td>
              <FontAwesomeIcon title="Mark as read" className='faIcon' icon={faEnvelopeOpen} /></td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to='/message/123'>{message.substring(0,100)}...</Link>
            </td>
            <td>2 days ago</td>
            <td>
              <FontAwesomeIcon title="Mark as read" className='faIcon' icon={faEnvelopeOpen} /></td>
          </tr>
          <tr>
            <td>
              John Doe
            </td>
            <td>
              <Link to='/message/123'>{message.substring(0,100)}...</Link>
            </td>
            <td>2 days ago</td>
            <td>
              <FontAwesomeIcon title="Mark as read" className='faIcon' icon={faEnvelopeOpen} /></td>
          </tr> 
        </table>
      </div>
    </div>
  )
}

export default Messages