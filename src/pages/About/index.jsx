import React from 'react'
import Layout from '../../components/Layout'
import Intro from './Intro'
import WhatWeDo from './WhatWeDo'

function About() {
  return (
    <Layout>

    <div>
        <Intro/>
        <WhatWeDo/>
    </div>
    </Layout>
  )
}

export default About