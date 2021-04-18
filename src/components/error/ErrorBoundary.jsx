import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import ServerAPI from 'utils/ServerAPI'
import Error from './Error'

class ErrorBoundary extends Component {
    state = { hasError: false, errorInfo: '' }

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
      const { children } = this.props
      const { hasError, errorInfo } = this.state
      return (hasError ? (
        <>
          <Redirect to='/error' />
          <Error errorInfo={errorInfo} />
        </>
      )
        : children
      )
    }
}

export default withRouter(ErrorBoundary)
