import React, { Component } from 'react'
import Error from 'components/error/Error'
import ServerAPI from 'utils/ServerAPI'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    const timeStamp = new Date().toString()
    const details = {
      errorName: error,
      stackTrace: info,
      creationTime: timeStamp,
    }
    ServerAPI.reportError(details)
  }

  render() {
    if (this.state.hasError) {
      return <Error />
    }
    return this.props.children
  }
}

export default ErrorBoundary
