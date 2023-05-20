import React from 'react'
import BaseLayout from '../../components/layouts/base'
import AboutForm from  '../../components/about'
import './About.scss'

const About = () => {
  return (
    <BaseLayout>
      <AboutForm />
      <div className="about">About</div>
    </BaseLayout>
  )
}

export default About
