import React, { useEffect, useState } from 'react';
import '../LastestRelease.css';
import ReleaseBook from './ReleaseBook';



const LastestReleaseList = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {

        fetch(`https://openlibrary.org/trending/now.json?`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBooks(data.works);
            })
            .catch(error => console.error('Error al obtener los detalles del libro:', error));
    }, []);

    return (
        <div className="latest-release-list">
            {books.map((book) => (
                <ReleaseBook key={book.key} book={book} />
            ))}
        </div>
    );
};

export default LastestReleaseList;

//https://openlibrary.org/search.json?author=tolkien&sort=new
//https://openlibrary.org/trending/now.json?