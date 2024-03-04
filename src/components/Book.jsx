import './Book.css';

const Book = ({book}) => {

    const lenguaje = book.language ? book.language[0] : 'No disponible';
    const editor = book.publisher ? book.publisher[0] : 'No disponible';
    const ratings_averageRounded = book.ratings_average && Math.round(book.ratings_average);

    console.log(book.isbn[0]);

    return (

        <div className="book-container">
                    {book && (
                        <>
                            <div className="book-image">
                                <div className="image-placeholder">
                                    <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt="Portada del libro" />
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
                                    <Link className="ver_mas" to={`/Book/${libro.key}`}>Ver mas</Link>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}
                </div>
            );
        };

export default Book;