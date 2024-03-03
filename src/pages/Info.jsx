import React, { useEffect } from 'react';
import { Textarea, Card } from "@nextui-org/react";
import { UserAuth } from '../context/AuthContext';

const Info = () => {

    const { user } = UserAuth();

    useEffect(() => {
        console.log(user);
    }
    );

    return (
        <div className="info-container" content='center' justify='center'>
            <Card className="info-card" bordered shadow width="50%"  >
                <h2>About BiblioWeb</h2>

                <h3>user: {user ? user.email : "No user"}</h3>

                <Textarea
                    isReadOnly
                    variant="bordered"
                    labelPlacement="outside"
                    defaultValue={`
                    BiblioWeb is a web application that allows you to search for books using the Open Library API.
                    You can search for books by title, author, or genre. The application will display a list of books
                    that match your search criteria. You can click on a book to see more details about it. The application
                    is built using React.
                    
                    This is a project for the Software Design course at TEC, IS 2024.`}
                    className="info-textarea"
                />

            </Card>
        </div>
    );
}

export default Info;
