import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router' // https://reacttraining.com/react-router/web/api/MemoryRouter
import Error from 'components/error/Error'
import ErrorBoundary from 'components/error/ErrorBoundary'

describe('ErrorBoundary.jsx', () => {
  const ThrowError = () => {
    throw new Error('Oops!')
  }

  const renderComponentWithError = () => (
    render(
      <MemoryRouter>
        <ErrorBoundary moreInfo='Some error'>
          <ThrowError />
        </ErrorBoundary>
      </MemoryRouter>
    )
  )

  test('when an error is thrown, the error component is displayed', () => {
    const { getByTestId } = renderComponentWithError()

    const errorComponent = getByTestId('error-component')
    expect(errorComponent).toBeInTheDocument()
  })

})
