import Hero from "./components/Hero";
import About from "./components/About";
import Banner from "./components/Banner";
import Podcast from "./components/Podcast";
import Quotes from "./components/Quotes";
import Founder from "./components/Founder";
import Promotion from "./components/Promotion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Banner/>
      <Podcast/>
      <Quotes/>
      <Founder/>
      <Promotion/>
      <Footer/>
      {/* <div className='h-[2000px]'></div> */}
    </div>
  );
}

export default App;
