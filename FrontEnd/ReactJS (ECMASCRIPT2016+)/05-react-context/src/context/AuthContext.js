import { createContext, useState } from "react";


const AuthContext = createContext(); // Paso Nro 1: Crear el contexto con createContext();

// Crear la funcion que proveera a los consumidores el contexto.

const initialAuth = null;

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        }else{ 
            setAuth(true);
        }
    }

    // objeto que tendran todas las propiedades que se usaran en el contexto...
    const data = {auth, handleAuth};

    // Retornar el contexto con su metodo proveedor. y los valores de contexto.
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

// Exportar el contexto que usaran todos los componentes que lo necesiten.
export {AuthContext}
// La funcion proveedora que precisamente le pasara el contexto a sus hijos.
export default AuthProvider;