import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OwnerSpeaking from "./pages/OwnerSpeaking/OwnerSpeaking";
import Menu from "./pages/Menu/Menu";
import Recruit from "./pages/Recruit/Recruit";
import Map from "./pages/Map/Map";
import Gallery from "./pages/Gallery/Gallery";
import Footer from "./pages/Footer/Footer";

const occupations = ["Barista", "Pastry Chef"];
const galleryImages = [
  { alt: "Extractor", src: "/resources/slide-causal-1.jpeg" },
  { alt: "A corner of shimmer", src: "/resources/slide-causal-3.jpeg" },
  { alt: "A shelf corner", src: "/resources/slide-causal-5.jpeg" },
  {
    alt: "Pretend to be a painter area",
    src: "/resources/slide-causal-6.jpeg",
  },
  { alt: "our coffee machine", src: "/resources/slide-causal-7.jpeg" },
];

const aboutContent =
  "Nestled in the heart of our vibrant community, The Shimmer is a sanctuary for lovers of fine coffee and splendid ambience. \nSince the establishment in 2019, we have been dedicated to serving expertly crafted coffee snacks and a selection of light fare dishes. \nWhether you're beginning your day with a robust espresso, pausing for an afternoon tea, or seeking a sweet treat, The Shimmer welcomes you to become a part of our story. ";
const speakingContent =
  "Glad you’ve stopped by The Shimmer. Since the cafe was opened back in 2019, it’s really been about catching those little moments of joy—like sipping a perfectly brewed coffee or munching on a freshly baked biscuit. We love keeping it laid-back here, so feel free to kick back, relax, and make this your second home. We’re all about sharing good times and great flavours, so grab a seat and let’s enjoy the day together.";

function App() {
  return (
    <div className="App">
      <Home>A Cup of Inspiration to Make Your Day </Home>
      <About aboutTitle={"Finest Coffee Served in your Community!"}>
        {aboutContent}
      </About>
      <OwnerSpeaking owner={"Shimmer"} speaking={speakingContent} />
      <Menu intro={"Coffee and more"} />
      <Gallery source={galleryImages} />
      <Recruit
        hiringText={"JOIN US NOW!"}
        subHiringText={"We are looking forward to wokring with you!"}
        jobs={occupations}
        contactInfo={"shimmer--007"}
        contactApp={"WeChat"}
      />
      <Map
        area={"LaoXimen"}
        city={"Changde"}
        province={"Hunan"}
        country={"China"}
      />
      <Footer />
    </div>
  );
}

export default App;
