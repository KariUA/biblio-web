import './Book.css';

const Book = ({book}) => {

    const lenguaje = book.language ? book.language[0] : 'No disponible';
    const editor = book.publisher ? book.publisher[0] : 'No disponible';
    const ratings_averageRounded = book.ratings_average && Math.round(book.ratings_average);

    return (
        <div className="book-container">
            <div className="book-image">
                <div className="image-placeholder"></div>
            </div>
            <div className='book-details'>
                <div className="book-info">
                    <p>Título: {book.title}</p>
                    <p>Autor: {book.author_name}</p>
                    <p>Editor: {editor}</p>
                    <p>Lenguaje: {lenguaje}</p>
                    <p>Año de publicación: {book.first_publish_year}</p>
                    <p>Cantidad de páginas: {book.number_of_pages_median}</p>
                    <p>Putaje: {ratings_averageRounded}</p>
                </div>
            </div>
            <hr />
        </div>
    )
};

export default Book;