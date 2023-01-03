import { useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Main from "./Main"

const initialTheme = "light";
const initialLanguague = "es";
const initialAuth = null;

const translations = {
    es: {
        headerTitle: "Mi aplicacion SIN Context Api",
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
            headerTitle: "My application WITHOUT Context Api",
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

const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [languague, setLanguague] = useState(initialLanguague);
    const [texts, setTexts] = useState(translations[languague]);
    const [auth, setAuth] = useState(initialAuth);

    const handleTheme = (e) => {
        console.log(e.target.value)
        if(e.target.value === "light"){
            setTheme("light")
        }else {
            setTheme("dark")
        }
    }

    const handleLanguague = (e) => {
        if(e.target.value === "es"){
            setLanguague("es")
            setTexts(translations.es)
        }else {
            setLanguague("en")
            setTexts(translations.en);
        }
    }

    const handleAuth = (e) => {
        if(auth){
            setAuth(null);
        }else{
            setAuth(true);
        }
    }

    return (
        <div className="my-page">
            <Header theme={theme} handleTheme={handleTheme} texts={texts} handleLanguague={handleLanguague} handleAuth={handleAuth} auth={auth} />
            <Main theme={theme} texts={texts} auth={auth} />
            <Footer theme={theme} texts={texts} />
        </div>
    )
}

export default MyPage
