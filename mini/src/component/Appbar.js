import React from 'react'

function Appbar() {
  return (
    <div className='bar'>
        <img className="log" src='https://cdn.pixabay.com/photo/2014/04/02/10/35/book-303927_1280.png'alt='logo'></img>
        <h1 id='name'>LIBRARY</h1>
        <button className='button b'>Sign in</button>
        <button className='button'>Log in</button>
        
    </div>
  )
}

export default Appbar;