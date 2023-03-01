import React from 'react'
import Address from './Address'
import Layout from '../../components/Layout'
import ContactForm from './ContactForm'

function Contact() {
  return (
      <Layout>
        <div className='grid grid-cols-2 px-32 gap-20 mt-32'>
          <Address/>
          <ContactForm/>
        </div>
      </Layout>
  )
}

export default Contact