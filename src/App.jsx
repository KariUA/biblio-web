import React, { useState } from 'react';
import SearchBook from './components/SearchBook';
import ListBook from './components/ListBook';
import './App.css'; //Falta mejorar el estilo de la aplicación


const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => { 
    setSearchResults(results); //Actualiza el estado con los resultados de la búsqueda
  };

  return (
    <div>
      <h1>Book Search App</h1>
      <SearchBook onSearch={handleSearch} /> 
      <ListBook books={searchResults} />
    </div>
  );
};

export default App;