import { createContext, useState } from "react";

const LanguagueContext = createContext();  // Paso Nro 1: Crear el contexto con createContext();

const initialLanguague = "es";
const translations = {
    es: {
        headerTitle: "Mi aplicacion CON Context Api",
        headerSubtitle: "Mi Cabecera",
        headerLight: "Claro",
        headerDark: "Oscuro",
        buttonLogin: "Iniciar Sesion",
        buttonLogout: "Cerrar Sesion",
        mainWelcome: "Bienvenid@ invitad@",
        mainHello: "Hola usuari@",
        mainContent: "Mi contenido principal",
        footerTitle: "Mi pie de pagina"
    },
    en: {
            headerTitle: "My application WITH Context Api",
            headerSubtitle: "My Header",
            headerLight: "Light",
            headerDark: "Dark",
            buttonLogin: "Login",
            buttonLogout: "Close Session",
            mainWelcome: "Welcome Guest",
            mainHello: "Hello user",
            mainContent: "My main content",
            footerTitle: "My footer"
        }, 
}

// crear una funcion provider que proveea precisamente ese contexto que estamos manejando para que los hijos puedan consumirla

const LanguagueProvider = ({children /* La funcion provider recive a los children, es decir a todos los componentes o elementos JSX que agrupa este componente provider*/}) => {
    const [languague, setLanguague] = useState(initialLanguague);
    const [texts, setTexts] = useState(translations[languague]);
// Creamos las variables de estados que necesitamos manejar en un contexto global !.


// Algunas funcionalidades extras...
    const handleLanguague = (e) => {
        if(e.target.value === "es"){
            setLanguague("es")
            setTexts(translations.es)
        }else {
            setLanguague("en")
            setTexts(translations.en);
        }
    }

    const data = { texts, handleLanguague}; // Creamos un objeto que tendran los valores que el provider llevara a los consumidores.

    // Exportamos el contexto que creamos con createContext() = .Provider que es el proveedor que acepta los valroes que enviara a los hijos...
    return <LanguagueContext.Provider value={data}>{children}</LanguagueContext.Provider>;
}
// Es importante exportar independientemente el contexto, pues para poderlo usar en el componente que lo necesitemos.
export {LanguagueContext};
// Por ultimo exportamos por defecto la funcion proveedora que envolvera a los componentes que queremos que tengan acceso al contexto...
export default LanguagueProvider;