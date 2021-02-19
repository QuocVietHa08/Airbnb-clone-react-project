import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Footer from './Footer';
import SignIn from './component/Header/SignIn/SignIn';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/login'>
            <SignIn />
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
