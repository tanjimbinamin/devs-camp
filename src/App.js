import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Cards from './Components/Cards/Cards';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
              <Hero></Hero>
              <Cards></Cards>
          </Route>
          <Route exact path="/home">
              <Hero></Hero>
              <Cards></Cards>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
