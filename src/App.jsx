import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from './context/AuthContext';
import { MyRoutes } from './routers/Routes';


const App = () => {
  return (
    <NextUIProvider>
      <AuthContextProvider>

        <MyRoutes />

      </AuthContextProvider>
    </NextUIProvider>

  );
};


export default App;