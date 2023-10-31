import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Icon.jsx';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import CartWidget from './CartWidget.jsx';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const NavbarAndIcon = ({onSearch}) => {
  const navbarStyle = {
    //  display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: '10px',
     borderRadius: '10px',
     padding: '10px',
     width: '70%',
  };

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center' }}>
      <Navbar bg="primary" variant="dark" style={navbarStyle} >
        <Container >
          <Link to='/'><Logo/></Link>
          <Link to='/'><Navbar.Brand href="#home" style={{paddingLeft: '20px',}}>Inicio</Navbar.Brand></Link>
          <Nav className="me-auto dropdown">
            <DropdownButton id="dropdown-basic-button" title="Shop">
             <Link to='/Cositas'><Dropdown.Item href="#/action-1">Cositas</Dropdown.Item></Link>
             <Link to='/Libros'><Dropdown.Item href="#/action-2">Libros</Dropdown.Item></Link>
             <Dropdown.Item href="#/action-3">Desabilitado</Dropdown.Item>
           </DropdownButton>
           <nav>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit">Buscar</button>
      </form>
    </nav>
          </Nav>
          <CartWidget/>
        </Container>
    </Navbar>
    </div>
  );
};
export default NavbarAndIcon;


