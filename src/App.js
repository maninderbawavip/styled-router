import { Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Category } from './pages/Category';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Stars } from './pages/Stars';


const App = () => {
  return (
    <div className={"App"}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:id" component={Category} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Stars />
    </div>
  )
}


export default App;
