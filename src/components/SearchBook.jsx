import React, { useState } from 'react';

const SearchBook = ({ onSearch }) => {
    const [query, setQuery] = useState(''); 
    const [searchBy, setSearchBy] = useState('q');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setError('');
        setLoading(true);

        if (!query.trim()) {
            setError('Por favor, ingresa un término de búsqueda.');
            setLoading(false);
            return;
        }

        try {
            let url;
            const encodedQuery = query.split(' ').join('+');

            if (searchBy === 'q') {
                url = `https://openlibrary.org/search.json?q=${encodedQuery}`;
            } else if (searchBy === 'title') {
                url = `https://openlibrary.org/search.json?title=${encodedQuery}`;
            } else if (searchBy === 'author') {
                url = `https://openlibrary.org/search.json?author=${encodedQuery}`;
            } else if (searchBy === 'genre') {
                //los espacios en blanco en el género deben ser reemplazados por guiones bajos
                let encoded = query.split('+').join('_');
                url = `https://openlibrary.org/subjects/${encoded}.json?details=true`;
            }

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('No se pudieron obtener los datos');
            }

            const data = await response.json();
            console.log(data);

            if (data.docs && data.docs.length > 0) {
                onSearch(data.docs);
            } else {
                onSearch([]); // Limpiar los resultados existentes
                setError('No se encontraron resultados.');
            }
        } catch (error) {
            console.error('Error fetching books:', error);
            setError('Ocurrió un error al buscar libros. Por favor, inténtalo de nuevo más tarde.');
        }

        setLoading(false);
    };

    const handleFilterChange = (e) => {
        setSearchBy(e.target.value);
        onSearch([]); // Limpia los resultados existentes cuando cambia el filtro
        setError(''); // Limpia cualquier mensaje de error existente
    };

    return (
        <div>
            <div>
                {/* Aquí se establece el texto de búsqueda, el filtro y el botón de búsqueda */}
                <h2>Search Books</h2>
                <input
                    type="text"
                    placeholder="Search by title, author, or genre"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <select value={searchBy} onChange={handleFilterChange}>
                    <option value="q">All</option>
                    <option value="title">Title</option>
                    <option value="author">Author</option>
                    <option value="genre">Genre</option>
                </select>

                <button onClick={handleSearch} disabled={loading}>
                    {loading ? 'Loading...' : 'Search'}
                </button>

            </div>

            {error && <p>{error}</p>}
        </div>
    );
};

export default SearchBook;
