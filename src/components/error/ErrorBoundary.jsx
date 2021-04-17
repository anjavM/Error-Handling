import React, { Component } from 'react'
import ServerAPI from 'utils/ServerAPI'
import Error from './Error'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false, errorInfo: '' }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    const timeStamp = new Date().toString()
    const details = {
      errorName: error,
      stackTrace: info.componentStack,
      creationTime: timeStamp,
    }

    const stackTrace = info.componentStack
    ServerAPI.reportError(details)
    this.setState({ errorInfo: stackTrace })

  }

  render() {
    if (this.state.hasError) {
      return (
        <Error errorInfo={this.state.errorInfo} />
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
