import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import OspinSidebar from 'components/main/OspinSidebar'
import Devices from 'components/devices/Devices'
import Changelog from 'components/changelog/Changelog'
import Profile from 'components/profile/Profile'
import Notifications from 'components/notifications/Notifications'
import ErrorBoundary from 'components/error/ErrorBoundary'
import Error from 'components/error/Error'

const Main = () => (
  <div>
    <BrowserRouter forceRefresh={false}>

      <OspinSidebar />

      <Container fluid className='main-content'>
        <ErrorBoundary>
          <Switch>
            <Route exact path='/devices' component={Devices} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/notifications' component={Notifications} />
            <Route exact path='/changelog' component={Changelog} />
            <Route exact path='/error' component={Error} />
            <Route path='/' component={Devices} />
          </Switch>
        </ErrorBoundary>
      </Container>

    </BrowserRouter>
  </div>
)

export default Main
