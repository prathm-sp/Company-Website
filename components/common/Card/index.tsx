import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { Raleway, Nunito_Sans } from 'next/font/google';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
const raleway = Raleway({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

type TCard = {
  imgUrl: string | StaticImport,
  title: string,
  description: string | string[] | any,
  variant?: 'primary' | 'secondary',
  mImgWidth?: number | `${number}` | undefined,
  mImgHeight?: number | `${number}` | undefined,
  dImgWidth?: number | `${number}` | undefined,
  dImgHeight?: number | `${number}` | undefined,
}

function Card({ imgUrl, title, description, mImgWidth = '61', mImgHeight = '60', dImgWidth = '114', dImgHeight = '114', variant = 'primary' }: TCard) {
  return (
    <>
      {variant == 'primary' ? (
        <div className={`${styles.container} ${raleway.className}`}>
          <Image className='md:hidden' src={imgUrl} alt="Icon" width={mImgWidth} height={mImgHeight} />
          <Image className='hidden md:block' src={imgUrl} alt="Icon" width={dImgWidth} height={dImgHeight} />
          <p className={styles.heading}>{title}</p>
          <p className={styles.description}>{description}</p>
        </div>
      ) : (
        <div className={`${styles.secContainer} ${raleway.className}`}>
          <p className={styles.secHeading}>{title}</p>
          <div className='flex justify-between'>
            {description?.length ? (<ul className='mt-4 md:mt-7'>
              {description.map((desc: string, index: number) => (
                <li className={`${nunitoSans.className} ${styles.secDescription}`} key={`desc-${index}`}>
                  <div className={styles.listCircle}></div> {desc}
                </li>
              ))}
            </ul>)
              : null}
            <Image className='md:hidden' src={imgUrl} alt="Icon" width="125" height="119" />
            <Image className='hidden md:block' src={imgUrl} alt="Icon" width="240" height="229" />
          </div>
        </div>
      )}
    </>
  )
}

export default Card