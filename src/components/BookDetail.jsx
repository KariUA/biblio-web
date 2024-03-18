import '../BookDetails2.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import CoverNotAvailable from './CoverNotAvailable';

const BookDetail = () => {

    const { key } = useParams();
    const [book, setBook] = useState(null);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${key}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.docs && data.docs.length > 0) {
                    const firstBook = data.docs[0];
                    setBook(firstBook);
                }
            }).catch(error => console.error('Error al obtener los detalles del libro:', error));
    }, [key]);

    useEffect(() => {
        if (book && book.isbn && book.isbn[0]) {
            fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${book.isbn[0]}&jscmd=data&format=json`)
                .then(response => response.json())
                .then(data => {
                    if (data) {
                        setSubjects(data[`ISBN:${book.isbn[0]}`].subjects);
                    }
                }).catch(error => console.error('Error al obtener la descripción del libro:', error));
        }
    }, [book]);

    return (
        <div className='contenedor'>
            {book ? (
                <div className='visual'>
                    <div className='contenedor_imagen'>
                        {book.cover_i ?
                            <img className="imagen" src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt="Portada del libro" />
                            :
                            <CoverNotAvailable />}
                    </div>
                    <div className='informacion'>
                        <div className='titulo_autor'>
                            <h1 className="texto-neutro">{book.title}</h1>
                            {book.author_name && <h3 className="texto-neutro">{"by " + book.author_name.join(', ')}</h3>}
                        </div>
                        <div className='sinopsis'>
                            <p className='sinop texto-neutro'>Temas:</p>
                            <div className='caja_descripcion'>
                                {
                                    subjects ?
                                    subjects.map((subject, index) => {
                                        return <span key={index} className="texto-neutro">{subject.name}{index !== subjects.length - 1 ? ', ' : ''}</span>;
                                    })
                                    : "No hay información disponible."
                                }
                            </div>
                        </div>
                        <div className='editor'>
                            <p className="texto-neutro">Editor: {book.publisher ? book.publisher[0] : "Sin editor"}</p>
                        </div>
                        <div className='lenguaje'>
                            <p className="texto-neutro">Lenguaje: {book.language ? book.language[0] : "No disponible"}</p>
                        </div>
                        <div className='detalles_atomicos'>
                            <div className='publicacion'>
                                <p className="texto-neutro">Año de publicación: {book.first_publish_year}</p>
                            </div>
                            <div className='paginas'>
                                <p className="texto-neutro">Cant. de páginas: {book.number_of_pages_median}</p>
                            </div>
                            <div className='puntaje'>
                                <p className="texto-neutro">Puntaje: {book.ratings_average ? book.ratings_average.toFixed(1) : "NA"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p className="texto-neutro">Cargando...</p>
            )}
        </div>
    )
};

export default BookDetail;
