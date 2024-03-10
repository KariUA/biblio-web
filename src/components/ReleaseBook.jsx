import React from 'react';
import '../LastestRelease.css';

const ReleaseBook = ({ book }) => {
    return (

        <div className="release-book">
            <div className='imagen'>
                {book.cover_i ? (
                    <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="Portada del libro" />
                ) : (
                    <p>Portada no disponible</p>
                )}
            </div>
            <div className='content'>
                <h3>{book.title}</h3>
                <p>{book.author_name}</p>
            </div>
        </div>
    );
};

export default ReleaseBook;