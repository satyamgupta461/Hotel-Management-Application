import './App.css';
import HotelCard from './components/hotel-cards';
import NavBar from './components/nav-bar';
import SearchRadio from './components/searchRadio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SearchRadio/>
      <HotelCard/>
    </div>
  );
}

export default App;
