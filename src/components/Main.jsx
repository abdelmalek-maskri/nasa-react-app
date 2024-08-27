import React from 'react'
import SideBar from './SideBar'
import Footer from './Footer'

export default function Main({data}) {
  return (
        <div className='imgContainer'>
            <img className="bgImage" src={data.hdurl} alt='mars Image'/>
        </div>
  )
}
