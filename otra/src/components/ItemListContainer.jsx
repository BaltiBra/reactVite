import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import stock from './json/stock.json';

function ItemListContainer() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (searchTerm) => {
    const filtered = stock.filter((product) =>
      product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const productsToShow = filteredProducts.length> 0 ? filteredProducts : stock;

  return (
    <div className="row">
      {productsToShow.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <img src={require(`.${product.images}`)} className="card-img-top" alt={product.nombre} />
            <div className="card-body">
              <h5 className="card-title">{product.nombre}</h5>
              <p className="card-text">{product.descripcion}</p>
              <p className="card-text">${product.precio}</p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemListContainer;
