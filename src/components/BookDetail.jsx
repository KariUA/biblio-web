import '../BookDetail.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const BookDetail = () => {

    const { key } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Realizar la solicitud para obtener la información detallada del libro
        fetch(`https://openlibrary.org/search.json?q=${key}`)
            .then(response => response.json())
            .then(data => {
                // Verificar si se encontraron libros
                if (data && data.docs && data.docs.length > 0) {
                    // Tomar el primer libro de la lista de resultados
                    const firstBook = data.docs[0];
                    // Actualizar el estado del libro
                    setBook(firstBook);
                }

                console.log(data);    

            })
            
            .catch(error => console.error('Error al obtener los detalles del libro:', error));
    }, [key]);

    console.log(book);





return (
    <div className='contenedor'>
    {book ? (
        <div className='visual'>
            <div className="imagen">
                {book.cover_i && <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Portada del libro" />}
            </div>
            <div className='editor'>
                <p>Editor: {book.publisher[0]}</p>
            </div>
        </div>
    ) : (
        <p>Cargando...</p>
    )}
    {book && (
        <div className='informacion'>
            <div className='titulo_autor'>
                <h1>{book.title}</h1>
                {book.author_name && <h3>{book.author_name.join(', ')}</h3>}
            </div>
            <div className='sinopsis'>
                <p className='sinop'>Sinopsis:</p>
                <div className='caja_descripcion'>
                    {book.description && <p>{book.description}</p>}
                </div>
            </div>
            <div className='lenguaje'>
                <p>Lenguaje: {book.language}</p>
            </div>
            <div className='detalles_atomicos'>
                <div className='publicacion'>
                    <p>Año de publicación: {book.first_publish_year}</p>
                </div>
                <div className='paginas'>
                    <p>Cant. de páginas: {book.number_of_pages}</p>
                </div>
                <div className='puntaje'>
                    <p>Puntaje: {book.rating}</p>
                </div>
            </div>
        </div>
    )}
</div>
)
    };



export default BookDetail;