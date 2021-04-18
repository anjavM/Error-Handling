/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Container, Segment, Image, Button, Icon, Accordion } from 'semantic-ui-react'
import shock from '../../images/shock.gif'

const Error = ({ errorInfo }) => {

  const [isAccordionOpen, setOpen] = useState(false)
  const toggleAccordion = () => setOpen(!isAccordionOpen)

  return (
    <Container data-testid='error-component'>
      <Segment style={{ width: '30vw' }}>
        <div className='error'>
          <Image src={shock} alt='funny gif' />

          <h1>Oops! Something went wrong.</h1>
          <p>Don't worry, we've been notified and we're working on it. </p>
        </div>

        <a href='/'>
          <Button type='button' style={{ marginTop: '20px' }}>
            Back to homepage
          </Button>
        </a>

        <Accordion style={{ marginTop: '20px' }}>
          <Accordion.Title onClick={toggleAccordion}>
            <h3>
              What went wrong
              <Icon name='question circle' color='black' style={{ marginLeft: '5px' }} />
            </h3>
          </Accordion.Title>
          <Accordion.Content style={isAccordionOpen ? { display: 'block', backgroundColor: '#e8e8e8', padding: '10px' } : { display: 'none' }}>
            <p style={{ fontSize: '12px' }}>{errorInfo || "We don't know yet..."}</p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    </Container>
  )
}

export default Error
