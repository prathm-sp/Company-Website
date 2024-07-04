import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className='text-right flex flex-col items-end'>
        <p className={styles.title}>Sitemap</p>
        <ul className='pb-12'>
          <li>What We Do</li>
          <li>How We Think</li>
          <li>What We Are</li>
        </ul>
      </div>
      <div className='text-right flex flex-col items-end'>
        <p className={styles.title2}>Services</p>
        <ul className='pb-12'>
          <li>Development</li>
          <li>Designing</li>
          <li>Cloud solution</li>
        </ul>
      </div>
      <div className='text-right flex flex-col items-end'>
        <p className={styles.title3}>Reach out to us</p>
        <p className='text-sm font-normal mb-12'>nikhil@gmail.com</p>
      </div>
      <div className='text-right flex flex-col items-end'>
        <p className={`${styles.title4} md:mb-6`}>Follow us</p>
        <div className='flex flex-wrap justify-between w-28'>
          <div className='mb-4'>
            <Image src='/icons/linkedIn-icon.png' alt="Icon" width='45' height='45' />
          </div>
          <div className='mb-4'>
            <Image src='/icons/x-icon.png' alt="Icon" width='45' height='45' />
          </div>
          <Image src='/icons/insta-icon.png' alt="Icon" width='45' height='45' />
          <Image src='/icons/fb-icon.png' alt="Icon" width='45' height='45' />
        </div>
      </div>
    </div>
  )
}

export default Footer