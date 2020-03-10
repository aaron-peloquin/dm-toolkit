import App from 'next/app'
import React from 'react'
import { withApollo } from '../apollo-client-server/client'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default withApollo(MyApp)
