import './App.css';
// import Main from './components/Main';
import { useState } from 'react';
import NavBar from './components/Navbar';
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import fondo from './components/images/fondo.jpg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Libros from './components/Libros';
import Cositas from './components/Cositas';
import Main from './components/Main';
import Carrito from './components/Carrito';
import Error404 from './components/Error404';
import SearchResultContainer from './components/SearchResultContainer';
import ItemCount from './components/ItemCount';
import Carrousel from './components/Carrousel';
import Footer from './components/footer/Footer';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (< div style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh',  overflow: 'hidden'}}>
        
        
          
         <Router>  
            <div >
              < NavBar onSearch={handleSearch}/>
            </div>
          <Routes>
            <Route path='/' index element={<Main/>}/>
            <Route path='/Libros' element={<Libros></Libros>}/>
            <Route path='/Cositas'  element={<Cositas></Cositas>}/>
            <Route path='/*' element={<Error404></Error404>}/>
            <Route path="/search/:term" Component={SearchResultContainer} />
          </Routes>
         
        </Router>
          
          <ItemCount></ItemCount>
          {/* <Carrito></Carrito> */}
      {/* <ItemListContainer nombre={'Baltasar'} searchTerm={searchTerm} />
          <ItemDetailContainer/> */}
  <Footer />
 </div> );
}

export default App;