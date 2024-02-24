import React from 'react';

const ListBook = ({ books }) => { //Recibe la lista de libros como un prop(parámetro)
  return (
    <div>
      <h2>Results:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title}</li>
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
