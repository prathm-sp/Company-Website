import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { Orelega_One } from 'next/font/google';
const orelegaOne = Orelega_One({ weight: "400", subsets: ['latin'] });

function Header() {
  return (
    <div className={`flex relative justify-center ${styles.container} ${orelegaOne.className}`}>
      <div className='flex absolute md:hidden'>
        <Image src={`/illustration/head-ilustration-mob.png`} alt="BG-ILLUSTRATION" width="204" height="138" />
      </div>
      <div className='hidden md:flex absolute'>
        <Image src={`/illustration/head-ilustration-des.png`} alt="BG-ILLUSTRATION" width="724" height="531" />
      </div>
      <div className={styles.headContent}>
        <p>Smart Solution</p>
        <p className={styles.subText}>To Grow Your</p>
        <p className={styles.subText2}>Business Online</p>
      </div>
    </div>
  )
}

export default Header