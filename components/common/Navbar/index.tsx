'use client'

import React, { useState } from 'react';
import styles from './styles.module.css'

function Navbar() {
  const [openPopup, setOpenPopup] = useState(false)

  const togglePopup = () => setOpenPopup(!openPopup)
  return (
    <div className='flex justify-end'>
      <div className={`${styles.desNav}`}>
        <a>What We Do •</a>
        <a href="">How We think •</a>
        <a href="">Who We Are •</a>
        <button>Let's Talk -&gt;</button>
      </div>
      <div className={styles.mobNav}>
        <div className='flex items-center'>
          <span className={`mr-2 ${styles.menu}`}>Menu</span>
          <button onClick={togglePopup} type="button" className="flex h-7 p-2 items-center text-sm rounded-lg focus:outline-none dark:text-gray-400">
            {openPopup ? (
              <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.846154 10L0 9.23077L4.65385 5L0 0.76923L0.846154 0L5.5 4.23077L10.1538 0L11 0.76923L6.34615 5L11 9.23077L10.1538 10L5.5 5.76923L0.846154 10Z" fill="#FEFFFF" />
              </svg>
            ) : (
              <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.1875 13C17.6362 13 18 12.6362 18 12.1875C18 11.7388 17.6362 11.375 17.1875 11.375H12.8125C12.3638 11.375 12 11.7388 12 12.1875C12 12.6362 12.3638 13 12.8125 13H17.1875ZM17.1875 7.3125C17.6362 7.3125 18 6.94873 18 6.5C18 6.05127 17.6362 5.6875 17.1875 5.6875H6.8125C6.36377 5.6875 6 6.05127 6 6.5C6 6.94873 6.36377 7.3125 6.8125 7.3125H17.1875ZM17.1875 1.625C17.6362 1.625 18 1.26123 18 0.8125C18 0.363769 17.6362 0 17.1875 0H0.8125C0.363768 0 0 0.363769 0 0.8125C0 1.26123 0.363768 1.625 0.8125 1.625H17.1875Z" fill="#FEFFFF" />
              </svg>
            )}
          </button>
        </div>
        {openPopup ? (
          <div className={styles.mobNavPopup}>
            <a>What We Do •</a>
            <a href="">How We think •</a>
            <a href="">Who We Are •</a>
            <button>Let's Talk -&gt;</button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Navbar