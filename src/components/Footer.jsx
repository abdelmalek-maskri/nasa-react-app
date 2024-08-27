import React from 'react'

export default function Footer({showModal, handleToggleModal, data}) {
  return (
    <footer>
        <div className='bgGradint'>

        </div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data ?.title}</h2>
      </div>
      <button onClick={handleToggleModal}><i className="fa-solid fa-circle-info"></i></button>
    </footer>
  )
}
