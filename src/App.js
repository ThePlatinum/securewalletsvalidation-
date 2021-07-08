import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Wallets from './components/Wallets'
import Form from './components/Form'
import Syncs from './components/Syncs'

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route path='/' exact component={ Home }/>
        <Route path='/wallets' exact component={ Wallets }/>
        <Route path='/connect' exact component={ Form }/>
        <Route path='/syncs' exact component={ Syncs }/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
