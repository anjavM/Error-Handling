/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Container, Segment, Image, Button, Icon, Accordion } from 'semantic-ui-react'
import { withRouter, Redirect } from 'react-router-dom'
import shock from '../../images/shock.gif'

const Error = () => {

  const [isAccordionOpen, setOpen] = useState(false)
  const toggleAccordion = () => setOpen(!isAccordionOpen)

  return (
    <Container>
      <Redirect to='/error' />
      <Segment>
        <div className='error'>
          <Image src={shock} alt='funny gif' />

          <h1>Oops! Something went wrong.</h1>
          <p>Don't worry, we've been notified and we're working on it. </p>
        </div>

        <a href='/'>
          <Button type='button'>
            Back to homepage
          </Button>
        </a>

        <Accordion>
          <Accordion.Title onClick={toggleAccordion}>
            What went wrong
            <Icon name='question circle' color='black' />
          </Accordion.Title>
          <Accordion.Content style={isAccordionOpen ? { display: 'block' } : { display: 'none' }}>
            <p>AAAAAAH</p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    </Container>
  )
}

export default withRouter(Error)
