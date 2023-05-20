import React, { useState, useEffect } from 'react'
import PuppyList from  '../../components/puppylist/PuppyList'
import './Puppies.scss'

const Puppies = () => {
  const [sort, setSort] = useState("rates");
  
  const reSort = (type) => {
    setSort(type)
    setOpen
  }

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <div className="section puppies">
        <div className="container">
          <div className="page-header">
            <span className="breadcrumbs">PUPPYLAND &gt; PUPPIES &gt; BREED &gt; HUSKIES</span>
            <h1>Huskies</h1>
          </div>
          <div className="menu">
          <div className="filters-group">
                <input type="number" className='filters-input' name="age" placeholder="Age" min="1" max="50"/>
                <select className='filters-input'>
                  <option value="" disable="disabled" defaultValue>Select range</option>
                  <option value="baby">Baby</option>
                  <option value="young">Young</option>
                  <option value="junior">Junior</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select gender</option>
                    <option value="dogs">Male</option>
                    <option value="cats">Female</option>
                </select>
                <select className='filters-input'>
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
                <select className='filters-input'>
                  <option value="" disable="disabled" defaultValue>Select city</option>
                  <option value="baby">Baby</option>
                  <option value="young">Young</option>
                  <option value="junior">Junior</option>
                  <option value="adult">Adult</option>
                  <option value="senior">Senior</option>
                </select>

                <select className='filters-input'>
                  <option value="" disable="disabled" defaultValue>{sort === "rates" ? "Best rated" : "Latest"}</option>
                  {sort === "rates" ? ( 
                    <option value="Latest" onClick={() => reSort("createdAt")}>Latest</option>
                    ) : ( 
                    <option value="Best rated" onClick={() => reSort("rates")}>Best rated</option>
                  )}
                </select>
            </div>
          </div>
        </div>
      </div>
      <PuppyList />
    </>
      
  )
}

export default Puppies
