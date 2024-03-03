import React, { useState } from 'react';
import { Input, Button, Navbar, NavbarContent,Select, SelectItem } from '@nextui-org/react';



const SearchBook = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [searchBy, setSearchBy] = useState('q');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const options = ["All", "Title", "Author", "Genre"];


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

        <Navbar >
            <NavbarContent as="div" className="items-center" justify="end">
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Search by title, author or genre"
                    type="text"
                    size="sm"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Select
                    isRequired
                    label="Filter"
                    defaultSelectedKeys={["All"]}
                    onChange={handleFilterChange}
                    className="max-w-xs"
                >
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </Select>

                <Button
                    color="primary"
                    onClick={handleSearch}
                    loading={loading}
                >
                    {loading ? "Loading..." : "Search"}
                </Button>
                </NavbarContent>
            {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        </Navbar>


    );

};

export default SearchBook;


