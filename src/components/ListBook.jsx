import React from 'react';
import Book from './Book';

const ListBook = ({ books }) => { //Recibe la lista de libros como un prop(parámetro)
  return (
    <div>
      <h2 className="text-center" hidden={books.length === 0}>Results:</h2>
      <ul>
        {books.map((book, index) => (
          <Book key={index} book={book} />
          
        ))}
      </ul>
    </div>
  );
};

// TODO: Modifica el componente para que muestre más detalles de los libros en la lista
// - Muestra el título de cada libro
// - Muestra el autor de cada libro
// - Muestra el año de publicación de cada libro
// - Muestra el género de cada libro(revisa la propiedad subject de cada libro)

// - PLUS-> Muestra la portada de cada libro (si está disponible) como una imagen 

export default ListBook;
