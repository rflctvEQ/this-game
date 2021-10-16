import * as React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import P1TypeName from './pages/P1TypeName';
import { P2LoadingScreen, P3WelcomeDoug, P4FifthGraderMath, P5HiddenDev, P6OnePlusOne, P7No, P8PopTheBalloon, P9ExecuteProtocol, RebootSequence } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter basename ={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={['/', '/this-game']}>
        <P1TypeName />
      </Route>
      <Route path='/load'>
        <P2LoadingScreen />
      </Route>
      <Route path='/welcome'>
        <P3WelcomeDoug />
      </Route>
      <Route path='/666'>
        <P4FifthGraderMath />
      </Route>
      <Route path='/hidden'>
        <P5HiddenDev />
      </Route>
      <Route path='/dont-close-this-tab'>
        <P6OnePlusOne />
      </Route>
      <Route path='/no'>
        <P7No />
      </Route>
      <Route path='/pop'>
        <P8PopTheBalloon />
      </Route>
      <Route path='/execute'>
        <P9ExecuteProtocol />
      </Route>
      <Route path='/reboot'>
        <RebootSequence />
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
