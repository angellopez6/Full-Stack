import { useContext } from "react"
import { LanguagueContext } from "../context/LanguagueContext";
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
    const {theme} = useContext(ThemeContext);
    const {texts} = useContext(LanguagueContext);

    return (
            <footer className={theme}>
                <h4>{texts.footerTitle}</h4>
            </footer>
    )
}

export default FooterContext
