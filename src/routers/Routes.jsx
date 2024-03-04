import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Info from '../pages/Info';
import { UserAuth } from '../context/AuthContext';
import CustomNavbar from '../components/CustomNavbar';


// TODO: 1. Al abrir la aplicación, el usuario debe ser redirigido a la página de inicio.
    // 2. Si el usuario no está autenticado, y quiere ver detalles de un libro, debe ser redirigido a la página de registro.


export function MyRoutes() {

    const {user} = UserAuth();

    // Componente que se encarga de verificar si el usuario esta autenticado  y si no lo esta lo redirige a la pagina de login
    const RequireAuth = ({children}) => {
        if (!user) {
            return <Navigate to="/login" />; 
        }
        return children;
    };

    return (
        <BrowserRouter>

        <CustomNavbar />

            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/info" element={<RequireAuth> <Info /></RequireAuth>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}



