import React from 'react'
import styles from './styles.module.css'
import Card from '@/components/common/Card';
import { SectionWrapper } from '@/components/common/Wrapper';

const HowWeStand = () => (
  <SectionWrapper title="How We Stand Out For you">
    <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-between w-full'>
      <div className={`mb-6 md:mb-10 ${styles.cardContainer}`}>
        <Card
          imgUrl='/icons/expertise-icon.png'
          title='Expertise'
          dImgWidth='117'
          description='Our team of seasoned professionals brings years of collective experience and expertise in a range of digital services, including web design, development, software and app development, and digital marketing. We pride ourselves on our ability to stay ahead of the curve by continually staying abreast of the latest trends and technologies.'
        />
      </div>
      <div className={`mb-6 md:mb-10 ${styles.cardContainer}`}>
        <Card
          imgUrl='/icons/custom-icon.png'
          mImgWidth='46'
          dImgWidth='88'
          title='Custom Solutions'
          description="We understand that every business is different. That's why we take a personalised approach to every project, working closely with you to understand your goals and objectives. Whether you need a stunning website, a robust e-commerce platform, or a comprehensive digital marketing strategy, we've got you covered."
        />
      </div>
    </div>
    <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-around w-full'>
      <div className={`mb-6 md:mb-10 ${styles.cardContainer}`}>
        <Card
          imgUrl='/icons/innovation-icon.png'
          title='Innovation'
          description='Innovation is at the heart of everything we do. From cutting-edge designs to intuitive user experiences, we push the boundaries to create solutions that not only meet but exceed your expectations.'
        />
      </div>
      <div className={`mb-6 md:mb-10 ${styles.cardContainer}`}>
        <Card
          imgUrl='/icons/result-icon.png'
          title='Results-Driven Approach'
          description="Our ultimate goal is to deliver measurable results that help your business thrive. Whether it's increased website traffic, higher conversion rates, or improved brand visibility, we focus on tangible outcomes that drive real business growth."
        />
      </div>
    </div>
  </SectionWrapper>
)

export default HowWeStand