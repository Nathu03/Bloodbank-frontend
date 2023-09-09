import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './home/Home';
import Navbar from './layouts/navbar';
import Footer from './layouts/footer';
import Profile from './pages/profile';
import Contact_us from './pages/contactus';
import Events from './pages/events';
import Form from './components/form';
import Shedule_Event from './pages/schedule_event';
import AboutUs from './pages/aboutus';
import Doners from './pages/doners';
import Setting from './pages/setting';
import Message from './pages/message';
import BloodBag from './pages/Bloodbags';
import Donate_now from './pages/donate_now';
import Errorpage from './error/pagenotfound';
import axios from 'axios';
import LoginTwo from './auth/Logintwo';
import RegisterTwo from './auth/Registertwo';

// axios.defaults.baseURL = "http://127.0.0.1:8001/";
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";

axios.defaults.withCredentials = true;


const App = () => {
  const isLoggedIn = true;

  return (




    <Router>
      {isLoggedIn && <Navbar />}
      <Switch>
        <Route exact path="/" component={LoginTwo} />
        <Route exact path="/register" component={RegisterTwo} />
        <Route exact path="/home" component={Home} />
    {/* //     <Route exact path="/form" component={Form} />
    //     <Route exact path="/profile" component={Profile} />
    //     <Route exact path="/contact-us" component={Contact_us} />
    //     <Route exact path="/events" component={Events} />
    //     <Route exact path="/about-us" component={AboutUs} />
    //     <Route exact path="/blood-donors" component={Doners} />
    //     <Route exact path="/donate-now" component={Donate_now} />
    //     <Route exact path="/schedule" component={Shedule_Event} />
    //     <Route exact path="/settings" component={Setting} />
    //     <Route exact path="/blood-bags" component={BloodBag} />
    //     <Route exact path="/message/:name" component={Message} />
    //     <Route exact path="/error" component={Errorpage} /> */}
        <Route exact path="/">
          {isLoggedIn ? <Login /> : <Redirect to="/home" />}
        </Route>
        <Route exact path="/register" component={Register} />
        <Route path="*">
          <Redirect to="/error" />
        </Route>
      </Switch>
      {isLoggedIn && <Footer />}
    </Router>
  );
};

export default App;
