import React from 'react'
import './Titles.scss'

const Titles = ({subtitle, title}) => {
  return (
    <div className="section titles">
      <div className="container">
        <h2 className="section-subtitle">
            {subtitle}
        </h2>
        <h1 className="section-title">
            {title}
        </h1>
      </div>
    </div>
  )
}

export default Titles