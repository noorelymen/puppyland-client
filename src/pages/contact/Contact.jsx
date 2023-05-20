import React from 'react'
import BaseLayout from '../../components/layouts/base'
import ContactForm from  '../../components/contact'
import './Contact.scss'

const Contact = () => {
  return (
    <BaseLayout>
      <ContactForm />
      <div className="contact">Contact</div>
    </BaseLayout>
  )
}

export default Contact