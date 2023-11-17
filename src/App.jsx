import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './components/images/fondo.jpg';
import Footer from './components/Footer';

function App() {
  return (<>
          <div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
          <NavBar />
          <ItemListContainer nombre={'Baltasar'} />



          <Footer></Footer>
      </div>
  </>);
}

export default App;