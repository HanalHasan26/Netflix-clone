
import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar';
import RowPost from './Components/Rowpost/RowPost';
import  urls  from './url';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={urls.originals} title='Netflix Originals'/>
        <RowPost url={urls.action} title='Action' isSmall/>
        <RowPost url={urls.comedy} title='Comedy' isSmall/>
        <RowPost url={urls.romance} title='Romance' isSmall/>
        <RowPost url={urls.horror} title=' Horror' isSmall/>
        <RowPost url={urls.topRated} title=' Top Rated' isSmall/>
        <RowPost url={urls.documentaries} title='Documentaries ' isSmall/>
        <Footer/>
    </div>
  );
}

export default App;
