import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AddPuppy.scss'

const AddPuppy = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className='add-puppy'>
      <div className="container">
        <span className="breadcrumbs"><Link to='/'>PUPPYLAND</Link> &gt; <Link to='/add-puppy'>ADD A NEW PUPPY</Link></span>
        <div className="title">
          <h1>Add a new puppy</h1>
        </div>
        <hr />
        <div className="sections">
          <div className="column left">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Puppy's name" />
            <label htmlFor="">Breed</label>
            <select name="breeds" id="breeds">
              <option value="" disable="disabled" defaultValue>Select breed</option>
              <option value="unknown-nobreed">Unknown</option>
              <option value="cavalier-king-charles">Cavalier King Charles</option>
              <option value="cocker-spaniel">Cocker Spanier</option>
              <option value="german-shepherd">German Shepherd</option>
              <option value="golden-retriever">Golden Retriever</option>
              <option value="australian-shepherd">Australian Shepherd</option>
              <option value="doberman">Doberman</option>
              <option value="border-collie">Border Collie</option>
              <option value="rottweiler">Rottweiler</option>
              <option value="french-bulldog">French Bulldog</option>
              <option value="pug">Pug</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple/>
            <label htmlFor="">Video</label>
            <input type="text" placeholder='https://www.youtube.com/watch?v=YXBh3riRMmI' />
            <label htmlFor="Description"></label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Brief description to introduce your rescued puppy'></textarea>
            <button>Create puppy</button>
          </div>
          <div className="column right">
            <label htmlFor="">Age</label>
            <input type="number" min={0} placeholder='Age'/>
            <label htmlFor="">Birthday</label>
            <input type="date" name="" id="" />
            <label htmlFor="">Gender</label>
            <select name="gender" id="gender">
              <option value="" disable="disabled" defaultValue>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label htmlFor="">City</label>
            <input type="text" placeholder='City' />
            <label htmlFor="">Qualities</label>
            <input type="text" placeholder='e.g. Playful' />
            <input type="text" placeholder='e.g. Silly' />
            <input type="text" placeholder='e.g. Smart' />
            <input type="text" placeholder='e.g. Sleepy' />
            <input type="text" placeholder='e.g. Good with kids' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPuppy 