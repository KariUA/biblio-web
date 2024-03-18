import './Book.css';
import React from 'react';
import { Link } from 'react-router-dom';
import CoverNotAvailable from './CoverNotAvailable';
import { Button } from '@nextui-org/react';


const Book = ({book}) => {

    const lenguaje = book.language ? book.language[0] : 'No disponible';
    const editor = book.publisher ? book.publisher[0] : 'No disponible';
    const ratings_averageRounded = book.ratings_average && Math.round(book.ratings_average);
    const bookKey = book.key.split('/')[2];

    return (

        <div className="book-container">
                    {book && (
                <>
                    <div>
                        <div className="image-placeholder">
                            <div className='portada'>
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Portada del libro" />
                            </div>
                        </div>
                    </div>
                            <div className='book-details'>
                                <div className="book-info">
                                    <p>Título: {book.title}</p>
                                    <p>Autor: {book.author_name}</p>
                                    <p>Editor: {editor}</p>
                                    <p>Lenguaje: {lenguaje}</p>
                                    <p>Año de publicación: {book.first_publish_year}</p>
                                    <p>Cantidad de páginas: {book.number_of_pages_median}</p>
                                    <p>Puntaje: {ratings_averageRounded}</p>
                                    <Button color="default" size="small" variant="faded" className="button">
                                        <Link to={`/book/${bookKey}`}>View details</Link>
                                    </Button>

                                </div>
                            </div>
                            <hr />
                        </>
                    )}
                </div>
            );
        };

export default Book;