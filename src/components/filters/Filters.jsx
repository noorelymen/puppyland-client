import React from 'react'
import './Filters.scss'

const Filters = () => {
  return (
    <div className="section filters">
        <div className="container">
            <div className="filters-group">
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select age</option>
                    <option value="baby">Baby</option>
                    <option value="young">Young</option>
                    <option value="junior">Junior</option>
                    <option value="adult">Adult</option>
                    <option value="senior">Senior</option>
                </select>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select breed</option>
                    <option value="dogs">Dogs</option>
                    <option value="cats">Cats</option>
                    <option value="rodents">Rodents</option>
                    <option value="birds">Birds</option>
                    <option value="fish">Fish</option>
                    <option value="other">Horses</option>
                    <option value="other">Other</option>
                </select>
                <select className='filters-input'>
                    <option value="" disable="disabled" defaultValue>Select gender</option>
                    <option value="dogs">Male</option>
                    <option value="cats">Female</option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Filters
