import React from 'react'

const doubleads = ({link1,link2}) => {
  return (
    <div className="Mainpageads-container">
    <img src={link1} alt="Mainpage Ad" className="Mainpageads-image-2" />
    <img src={link2} alt="Mainpage Ad" className="Mainpageads-image-2" />
  </div>
  )
}

export default doubleads