import React from 'react';
import { useParams } from 'react-router-dom';

function SearchResultContainer() {
  const { term } = useParams();

  return (
    <div>
      <h2>Resultados de búsqueda para: {term}</h2>
      {/* Lógica para mostrar los resultados basados en la búsqueda */}
    </div>
  );
}

export default SearchResultContainer;
