import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { LanguagueContext } from "../context/LanguagueContext";
import ThemeContext from "../context/ThemeContext";

const HeaderContext = () => {
    const {theme, handleTheme} = useContext(ThemeContext);
    const { texts, handleLanguague} = useContext(LanguagueContext);
    // Anteriormente se usaba una funcion llamada consumer pero despues de los Hooks ahora es mas sencillo.
    // El Hook para consumir un proveedor de contexto global se llama useContext(nameContext);
    const {auth, handleAuth} = useContext(AuthContext);

    return (
        <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select name="languague" onChange={handleLanguague}>
        <option value="es">ES</option>
        <option value="en">EN</option>
        </select>
        <input type="radio" name="theme" id="light-context" onClick={handleTheme} value="light"/>
        <label htmlFor="light-context">{texts.headerLight}</label>
        <input type="radio" name="theme" id="dark-context"  onClick={handleTheme} value="dark"/>
        <label htmlFor="dark-context">{texts.headerDark}</label>
        <button onClick={handleAuth}>
            {
            auth ? texts.buttonLogout : texts.buttonLogin
            }
        </button>
        </header>
    )
}

export default HeaderContext
