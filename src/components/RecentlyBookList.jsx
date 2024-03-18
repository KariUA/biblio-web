import React, { useEffect, useState } from 'react';
import RecentlyBook from './RecentlyBook';

const RecentlyBookList = () => {

    const [recentBooks, setRecentBooks] = useState([]);

    useEffect(() => {

        //Obtiene los libros publicados en el año 2024 y los ordena por rating
        fetch(`https://openlibrary.org/search.json?q=first_publish_year%3A%5B2023+TO+2024%5D&first_publish_year=2024&limit=10&sort=rating`)
            .then(response => response.json())
            .then(data => {
                setRecentBooks(data.docs);
            });

    }, []);
     
    return (
        <div className="recently-book-list">
            <h2 className="text-center w-full" style={{ margin: '1rem 0' }}> Top rated books 2024 </h2>
            <RecentlyBook books={recentBooks} />
        </div>
    );
};

export default RecentlyBookList;