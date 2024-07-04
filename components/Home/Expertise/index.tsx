import React from 'react'
import Card from '@/components/common/Card';
import { SectionWrapper } from '@/components/common/Wrapper';

const Expertise = () => (
  <SectionWrapper title="Some Of Our Expertise">
    <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-between w-full'>
      <div className='mx-auto mb-6 md:mb-10'>
        <Card
          imgUrl='/icons/web-icon.png'
          title='Web Design & Development'
          description='Our team excels in creating visually stunning and highly functional websites that are optimized for user experience and conversion.' />
      </div>
      <div className='mx-auto mb-6 md:mb-10'>
        <Card
          imgUrl='/icons/software-icon.png'
          title='Software Development'
          description='From custom software solutions to cutting-edge mobile applications, we have the technical prowess to bring your digital ideas to life.' />
      </div>
      <div className='mx-auto'>
        <Card
          imgUrl='/icons/consulting-icon.png'
          title='Consulting & Support'
          description='Our dedicated team provides expert guidance and ongoing support to ensure that your digital initiatives are successful and continue to deliver results over time.' />
      </div>
    </div>
  </SectionWrapper>
)

export default Expertise