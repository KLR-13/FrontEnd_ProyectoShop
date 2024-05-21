import '../App.css';
import Header from './Header';
import Cards from './Cards';
import Hero from './Hero';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
      
      <div><Hero></Hero></div>
      <Cards></Cards>
    </div>
  );
}

export default Home;