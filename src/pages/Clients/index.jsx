import React from 'react'
import Intro from './Intro'
import Layout from '../../components/Layout'
import ClientsList from './ClientsList'

function Clients() {
  return (
    <Layout>
        <Intro/>
        <ClientsList/>
    </Layout>
  )
}

export default Clients