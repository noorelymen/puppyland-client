import React from 'react';
import PuppyCard from "../../components/puppycard/PuppyCard"
import useFetch from "../../hooks/useFetch";
import './PuppyList.scss'

const PuppyList = () => {
  const {data,error,loading} = useFetch("/puppies")
  
  return (
    <div className="section puppies">
      <div className="container">
        {loading && <h1>Loading puppies...</h1>}
        {data && data.puppies.length > 0 && (
          <div className='puppy-cards'>
            {data.puppies.map(item=>(
              <div className="puppy-item" key={item._id}>
                <PuppyCard item={item} />
              </div>
            ))}
          </div>
        )}
        {data && data.puppies.length === 0 &&  (
          <h1>No puppies to show here!</h1>
        )}
        {error && <h1>Error fetching puppies</h1>}
      </div>    
    </div>    
  )
}

export default PuppyList;