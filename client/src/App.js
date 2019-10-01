import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const ComponentName = ({}) => (
  <>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path='/' component={home} />
      <Route exact path='/login' component={login} />
      <Route exact path='/register' component={register} />
      <Route component={Nomatch} />
    </Switch>
  </Container>
  </>
)

export default ComponentName;
