import React from 'react'

export default function SideBar({showModal, handleToggleModal, data}) {
  return (
    <div className='sidebar'>
        <div className='bgOverlay' onClick={handleToggleModal}></div>
        <div className='sidebarContents'>
        <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data.explanation}</p>
            </div>
            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            
        </div>
    </div>
  )
}
