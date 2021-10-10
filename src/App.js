import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Contact from './Pages/Contact'
import AboutMe from './Pages/AboutMe'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

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
