import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router'
import ErrorBoundary from 'components/error/ErrorBoundary'

describe('ErrorBoundary.jsx', () => {
  const ThrowError = () => {
    throw new Error('Oops!')
  }

  const renderComponent = () => (
    render(
      <MemoryRouter>
        <ErrorBoundary moreInfo='Some error'>
          <ThrowError />
        </ErrorBoundary>
      </MemoryRouter>
    )
  )

  test('when an error is thrown, the error component is displayed', () => {
    const { getByTestId } = renderComponent()

    const errorComponent = getByTestId('error-component')
    expect(errorComponent).toBeInTheDocument()
  })

})
