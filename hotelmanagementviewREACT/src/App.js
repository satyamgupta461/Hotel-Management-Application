import './App.css';
import './'
import HotelCard from './components/hotel-cards';
import NavBar from './components/nav-bar';
import SearchRadio from './components/searchRadio';
//import Login from './components/login';
//import SignUp from './components/signUp';

// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       {/* <SearchRadio/>
//       <HotelCard/>
//       <Login/>
//       <SignUp/> */}
//     </div>
//   );
// }

// export default App;


import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink, useParams } from "react-router-dom";
import SignUpForm from "./pages/SignUpForm";
import SignInForm from "./pages/SignInForm";
import AdminSignIn from "./pages/AdminSignIn"
import HotelDetails from './pages/HotelDetails';
import Dashboard from './pages/AdminDashboard';
import GForm from "./pages/GForm";
import ClientDashboard from './pages/ClientDashboard';
import BookHotel from './pages/BookHotel';
  
import "./App.css";
import Home from './pages/Home';
import HotelAdd from './pages/Hoteladdform';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/sign-in" component={SignInForm} />
        <Route path="/admin-sign-in" component={AdminSignIn} />
        <Route path="/search/:token" component = {Dashboard} />
        <Route path="/search/admin-hoteldetails" component={HotelDetails}/>
        <Route path="/admin-hoteldetails/addHotel" component = {HotelAdd}/>
        <Route path="/GForm" component={GForm} />
        <Route path="/login/client-dashboard/:id" component={ClientDashboard} />
        <Route path="/client/bookHotel/:id" component={BookHotel} />
      </Router>
    );
  }
}

export default App;