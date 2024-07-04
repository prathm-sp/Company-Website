'use client'

import React from 'react'
import { SectionWrapper } from '../Wrapper'
import styles from './styles.module.css'
import { Nunito_Sans } from 'next/font/google';
import Image from 'next/image';
const nunitoSans = Nunito_Sans({ subsets: ["latin"] });
import { useState } from 'react';

function LetsTalk() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formMessage, setFormMessage]: any = useState(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name && email && message) {
      setFormMessage({ type: 'success', content: 'Form submitted successfully!' });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setFormMessage({ type: 'error', content: 'Please fill in all fields.' });
    }
  };
  return (
    <SectionWrapper title="Let's Talk About The Project">
      <div className={`${styles.talkContainer} ${nunitoSans.className}`}>
        <Image className='md:hidden' src='/icons/lets-talk-icon-mobile.png' alt="Icon" width='274' height='62' />
        <Image className='hidden md:block' src='/icons/lets-talk-icon-desktop.png' alt="Icon" width='422' height='140' />
        <form className={`${styles.form} mt-6`}>
          {formMessage && (
            <div className={`mb-4 p-3 rounded-md ${formMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {formMessage.content}
            </div>
          )}
          <div className="mb-4">
            <input
              type="text"
              id="name"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              placeholder='Your Email'
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className="mb-6">
            <textarea
              id="message"
              value={message}
              placeholder='Your Message'
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className={styles.input}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" onClick={handleSubmit}>
              Submit -&gt;
            </button>
          </div>
        </form>
      </div>
    </SectionWrapper>
  )
}

export default LetsTalk