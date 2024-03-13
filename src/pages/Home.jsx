import React, { useState } from "react";
import SearchBook from "../components/SearchBook";
import ListBook from "../components/ListBook";
import { UserAuth } from "../context/AuthContext";
import BookDetail from "../components/BookDetail";
import LastestReleaseList from "../components/LatestReleaseList";

function Home() {

    const { user, logout } = UserAuth(); //Obtiene el usuario y la función para cerrar sesión
    const [searchResults, setSearchResults] = useState([]); //Estado para almacenar los resultados de la búsqueda

    const handleSearch = (results) => {
        setSearchResults(results); //Actualiza el estado con los resultados de la búsqueda
    };

    const signOff = async () => { //Función para cerrar sesión ()
        try {
            await logout();
        } catch (error) {
            console.log(error);
        }
    };

    console.log(user);

    return (
        <div>
            <SearchBook onSearch={handleSearch} />
            <ListBook books={searchResults} />
            <LastestReleaseList />
           
        </div>
    );
}

export default Home;