import AuthProvider from "../context/AuthContext";
import LanguagueProvider from "../context/LanguagueContext";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext"
import HeaderContext from "./HeaderContext"
import MainContext from "./MainContext"

const MyPageContext = () => {
    return (
        <div className="my-page">
            <ThemeProvider>
                <LanguagueProvider>
                        <AuthProvider>
                            <HeaderContext/>
                            <MainContext/>
                        </AuthProvider>
                    <FooterContext />
                </LanguagueProvider>
            </ThemeProvider>
        </div>
    )
}

export default MyPageContext
