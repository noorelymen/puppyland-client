import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './Adoptions.scss'

const Adoptions = () => {

  const currentUser = {
    id: 1,
    username: "Noor",
    isOwner: true
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='my-adoptions'>
      <div className="container">
      <span className="breadcrumbs">PUPPYLAND &gt; MY ADOPTIONS</span>

        <div className="title">
           
          <h1>My Adoptions</h1>
          <Link to="/add">
            <button className='button'>Adopt a new puppy</button>  
          </Link>
        </div>
        <hr />
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Breed</th>
            <th>{currentUser.isOwner ? "Adopter" : "Owner"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10318145/pexels-photo-10318145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              <Link to="/puppies/641b4dcc41dd3933f084e6ad">Clover</Link>
            </td>
            <td>Cavalier King Charles</td>
            <td>Noor Mebarki</td>
            <td><FontAwesomeIcon className='faIcon' icon={faPaperPlane} /></td>
          </tr>
          <tr>
            <td>
              <img src="https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            </td>
            <td>
              <Link to="/puppies/641b4e0741dd3933f084e6af">Blue Ivy</Link>
            </td>
            <td>Australian Shepherd</td>
            <td>Leila Mebarki</td>
            <td><FontAwesomeIcon className='faIcon' icon={faPaperPlane} /></td>
          </tr>
          <tr>
            <td>
              <img src="https://images.pexels.com/photos/10318145/pexels-photo-10318145.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            </td>
            <td>
              <Link to="/puppies/641a07c341dd3933f084e697">Raxon</Link></td>
            <td>Husky</td>
            <td>John Doe</td>
            <td><FontAwesomeIcon className='faIcon' icon={faPaperPlane} /></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Adoptions