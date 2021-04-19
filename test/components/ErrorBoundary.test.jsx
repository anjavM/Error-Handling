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

  const renderComponentWithChildren = () => (
    render(
      <MemoryRouter>
        <ErrorBoundary moreInfo='Some error'>
          <div data-testid='fake-div' />
        </ErrorBoundary>
      </MemoryRouter>
    )
  )

  test('when an error is thrown, the error component is displayed', () => {
    const { getByTestId } = renderComponent()

    const errorComponent = getByTestId('error-component')
    expect(errorComponent).toBeInTheDocument()
  })

  test('without an error, render a component with regular children', () => {
    const { getByTestId } = renderComponentWithChildren()

    const child = getByTestId('fake-div')
    expect(child).toBeInTheDocument()
  })
})
