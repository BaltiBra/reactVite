import React, { useState } from 'react';

function Carrito() {
  const [items, setItems] = useState([]);

  const agregarItem = (producto) => {
    setItems([...items, producto]);
  };

  const eliminarItem = (index) => {
    const nuevosItems = [...items];
    nuevosItems.splice(index, 1);
    setItems(nuevosItems);
  };

  return (
    <div>
      <h2>Carrito de compras</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => eliminarItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={() => agregarItem("Producto nuevo")}>Agregar al carrito</button>
    </div>
  );
}

export default Carrito;
