import React from "react";
import { useNavigate } from "react-router-dom";
import logoogle from "../img/logoogle.png";
import { UserAuth } from "../context/AuthContext";
import { Card, Button } from '@nextui-org/react';

function Login() {
    
    const navigate = useNavigate();
    const { user, signInWithGoogle } = UserAuth();

    

    const handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    // Si el usuario ya está autenticado, redirigir a la página de inicio
    if (user) {
        navigate("/");
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <Card bordered shadow width="400px" className="text-center">
                <h2 className="mb-4 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    To access BiblioWeb, sign in with your Google account.
                </h2>
                <div className="mt-6">
                    <Button className="w-full" onClick={handleSignInWithGoogle} color="default" variant="flat" auto size="small">
                        <img src={logoogle} alt="Google" className="mr-2" width={20} height={20} />
                        Sign In with Google
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Login;
