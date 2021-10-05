import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { P1TypeName, P2LoadingScreen, P3WelcomeDoug, P4FifthGraderMath, P5HiddenDev, P6OnePlusOne, P7No, P8PopTheBalloon, P9ExecuteProtocol, RebootSequence } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={['/', '/this-game']}>
        <P1TypeName />
      </Route>
      <Route exact path='/load'>
        <P2LoadingScreen />
      </Route>
      <Route exact path='/welcome'>
        <P3WelcomeDoug />
      </Route>
      <Route exact path='/144'>
        <P4FifthGraderMath />
      </Route>
      <Route exact path='/hidden'>
        <P5HiddenDev />
      </Route>
      <Route exact path='/dont-close-this-tab'>
        <P6OnePlusOne />
      </Route>
      <Route exact path='/no'>
        <P7No />
      </Route>
      <Route exact path='/pop'>
        <P8PopTheBalloon />
      </Route>
      <Route exact path='/execute'>
        <P9ExecuteProtocol />
      </Route>
      <Route exact path='/reboot'>
        <RebootSequence />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
