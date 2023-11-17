import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Error404 = () => {

    const error404 = {
    display: 'flex',
    flexdirection: 'column',
    alignitems: 'center',
    justifycontent: 'center',
    height: '100vh',
  };
    const error404content = {
    textalign: 'center',
    marginbottom: '20px',
  };

  return (
    <div style={error404}>
      <div style={error404content}>
        <h1>¡Ups!</h1>
        <h3>Parece que te has perdido en el camino...</h3>
        <p>No te preocupes, incluso los mejores viajeros se pierden a veces.</p>
        <Button as={Link} to="/" variant="primary">Volver al inicio</Button>
      </div>
      <div className="error404-animation">
        {/* Aquí puedes agregar una animación relajante en loop, como un GIF o un video */}
      </div>
    </div>
  );
};

export default Error404;
