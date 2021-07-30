import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aboutme' component={AboutMe}/>
      </Switch>
      </Router>      
    </>
  );
}

export default App;
