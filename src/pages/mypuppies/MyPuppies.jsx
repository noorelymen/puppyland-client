import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './MyPuppies.scss'

const MyPuppies = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  return (
    <div className='my-puppies'>
      <div className="container">
      <span className="breadcrumbs">PUPPYLAND &gt; MY PUPPIES</span>
        <div className="title">
          <h1>My puppies</h1>
          <Link to="/add-puppy">
            <button className='button'>Add a new puppy</button>  
          </Link>
        </div>
        <hr />
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Applications</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10318145/pexels-photo-10318145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              <Link to="/puppies/641b4dcc41dd3933f084e6ad">Clover</Link>
            </td>
            <td>Cavalier King Charles</td>
            <td>4</td>
            <td><FontAwesomeIcon className='faIcon' icon={faTrash} /></td>
          </tr>
          <tr>
            <td>
              <img src="https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </td>
            <td>
              <Link to="/puppies/641b4e0741dd3933f084e6af">Blue Ivy</Link>
            </td>
            <td>Australian Shepherd</td>
            <td>2</td>
            <td><FontAwesomeIcon className='faIcon' icon={faTrash} /></td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10318145/pexels-photo-10318145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              <Link to="/puppies/641a07c341dd3933f084e697">Raxon</Link></td>
            <td>Husky</td>
            <td>8</td>
            <td><FontAwesomeIcon className='faIcon' icon={faTrash} /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyPuppies