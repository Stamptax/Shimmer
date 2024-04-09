import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import OwnerSpeaking from './pages/OwnerSpeaking/OwnerSpeaking';
import Menu from './pages/Menu/Menu';
import Recruit from './pages/Recruit/Recruit';
import Map from './pages/Map/Map';
import Gallery from './pages/Gallery/Gallery';
import Footer from './pages/Footer/Footer';


const occupations = ['Barista', 'Pastry Chef']
const galleryImages = [
  { alt: 'Extractor', src: '/resources/slide-causal-1.jpeg' },
  { alt: 'A corner of shimmer', src: '/resources/slide-causal-3.jpeg' },
  { alt: 'A shelf corner', src: '/resources/slide-causal-5.jpeg' },
  { alt: 'Pretend to be a painter area', src: '/resources/slide-causal-6.jpeg' },
  { alt: 'our coffee machine', src: '/resources/slide-causal-7.jpeg' }
]

function App() {
  return (
    <div className="App">
      <Home>A Cup of Inspiration to Make Your Day </Home>
      <About aboutTitle={'Finest Coffee Served in your Community!'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </About>
      <OwnerSpeaking owner={'Shimmer'} speaking={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} />
      <Menu intro={'Coffee and more'} />
      <Gallery source={galleryImages} />
      <Recruit hiringText={'JOIN US NOW!'} subHiringText={'We are looking forward to wokring with you!'} jobs={occupations} contactInfo={'shimmer--007'} contactApp={'WeChat'} />
      <Map area={'LaoXimen'} city={'Changde'} province={'Hunan'} country={'China'} />
      <Footer />
    </div>
  );
}

export default App;
