import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Watches from './pages/Watches';
import Phones from './pages/Phones';
import Notfound from './pages/Notfound';
import './index.css';

const App = (
  <BrowserRouter>
    <div>
      <ul className='inlineList'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/watches'>Watches</Link>
        </li>
        <li>
          <Link to='/phones'>Phones</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/watches' component={Watches} />
        <Route path='/phones' component={Phones} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
