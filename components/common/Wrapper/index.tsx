import styles from './styles.module.css'
import { Orelega_One } from 'next/font/google';
const orelegaOne = Orelega_One({ weight: "400", subsets: ['latin'] });

type IMainWrapper = {
  children: any,
  className?: string
}

type ISectionWrapper = {
  children: any,
  title: string,
  className?: string
}

export const MainWrapper = ({ children, className }: IMainWrapper) => (
  <div className={`pt-6 md:pt-20 px-6 md:px-16 ${styles.mainWrapper} ${className}`}>
    {children}
  </div>
)

export const SectionWrapper = ({ children, title, className }: ISectionWrapper) => (
  <div className={`flex flex-col items-center mb-12 justify-center mt-16 ${styles.sectionWrapper} ${orelegaOne.className} ${className}`}>
    <p className={`pb-6 text-center ${styles.title}`}>{title}</p>
    {children}
  </div>
)
