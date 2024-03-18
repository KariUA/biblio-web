import React, { useEffect, useState } from 'react';
import TrendingBook from './TrendingBook';




const TrendingBooksList = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {

        fetch(`https://openlibrary.org/trending/now.json?limit=10&sort=new`)
            .then(response => response.json())
            .then(data => {
                setBooks(data.works);
            })
            .catch(error => console.error('Error al obtener la lista de libros en tendencia:', error));
    }, []);
    return (
        <div className="trending-books-list">
            <h2 className="text-center w-full" style={{ margin: '1rem 0' }}> Top trending books </h2>
            <TrendingBook books={books} />
        </div>
    );
};

export default TrendingBooksList;

