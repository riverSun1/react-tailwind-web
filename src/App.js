import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Offers from './components/Offers.jsx';
import Plann from './components/Plann.jsx';
import Rooms from './components/Rooms.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plann/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;

// https://tailwindcss.com/docs/installation
// npm install react-icons