import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import Host from './component/Header/Host/Host';
import SignIn from './component/Header/SignIn/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchDestination from './component/SearchDestination/SearchDestination';
import ServicePage from './component/Home/ServicePage/ServicePage';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route to path='/search/destination'>
            <Header />
            <ServicePage />
            <Footer />
          </Route>
          <Route path='/host'>
            <Host />
            <Footer />
          </Route>
          <Route path='/login'>
            <Header />
            <SignIn />
            <Footer />
          </Route>
          <Route path='/search'>
            <Header />
            <SearchDestination />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
