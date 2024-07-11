import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbox = () => {
  return (
    <div className='searchbox-container'>
      <CiSearch style={{fill:"gray",width:"50px",height:"30px"}}></CiSearch>
      <input className='searchbox' placeholder='Aradığınız ürün, marka veya kategoriyi yazınız'></input>
    </div>
  )
}

export default Searchbox