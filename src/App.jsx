import './App.css'
import Cards from './components/Cards';
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import flowerData from './flowerData';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <h3>
        <span className='flowers'>Flowers</span> of the week
      </h3>
      <div className="flowers">
        {
          flowerData.map((product)=>{
            return <Cards product = {product}/>
          })
        }
      </div>
       <Footer/>
      

    </>
  )
}

export default App
