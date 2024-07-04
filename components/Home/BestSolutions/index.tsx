import React from 'react'
import Card from '@/components/common/Card';
import { SectionWrapper } from '@/components/common/Wrapper';

const developmentDesc = ['Web Application', 'Mobile Applications', 'Robotic Process Automation', 'Software', 'IOT']
const designingDesc = ['UI/UX Design', 'Graphics', 'Design Printable']
const cloudDesc = ['Cloud Computing', 'Infrastructure Management', 'Cloud Operations']

const BestSolutions = () => (
  <SectionWrapper title="We Provide Best Solution For You">
    <div className='flex flex-col md:flex-row flex-wrap justify-center md:justify-between w-full'>
      <div className='mx-auto mb-6 md:mb-10'>
        <Card imgUrl='/icons/development-icon.png' title='Development' description={developmentDesc} variant='secondary' />
      </div>
      <div className='mx-auto mb-6 md:mb-10'>
        <Card imgUrl='/icons/development-icon.png' title='Designing' description={designingDesc} variant='secondary' />
      </div>
      <div className='mx-auto'>
        <Card imgUrl='/icons/development-icon.png' title='Cloud Solution' description={cloudDesc} variant='secondary' />
      </div>
    </div>
  </SectionWrapper>
)

export default BestSolutions