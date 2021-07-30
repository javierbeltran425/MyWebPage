import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutMe from './Pages/AboutMe'

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/aboutme' component={AboutMe}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
      </Router>      
    </>
  );
}

export default App;
