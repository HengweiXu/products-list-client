import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./store"
import { Products } from './components/products/Products'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/products' component={Products} />
          <Route exact path='/products/:page' component={Products} />
          <Redirect to='/products' />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
