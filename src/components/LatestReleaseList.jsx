import React, { useEffect, useState } from 'react';
import ReleaseBook from './ReleaseBook';




const LastestReleaseList = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {

        fetch(`https://openlibrary.org/trending/now.json?limit=10&sort=new`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setBooks(data.works);
            })
            .catch(error => console.error('Error al obtener los detalles del libro:', error));
    }, []);
    return (
        <div className="latest-release-list">
            <h2 className="text-center w-full" style={{ margin: '1rem 0' }}>Lastest Releases</h2>
            <ReleaseBook books={books} />
        </div>
    );
};

export default LastestReleaseList;

//https://openlibrary.org/search.json?author=tolkien&sort=new
//https://openlibrary.org/trending/now.json?
//https://openlibrary.org/trending.json?limit=10&sort=new 