import { BrowserRouter, Route, Routes , Navigate} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Info from '../pages/Info';
import { UserAuth } from '../context/AuthContext';
import CustomNavbar from '../components/CustomNavbar';
import BookDetail from '../components/BookDetail';


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
                <Route path="/book/:key" element={ <BookDetail /> } />
            </Routes>
        </BrowserRouter>
    );
}



