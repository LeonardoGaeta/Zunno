import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "@template/Template";

import changeThemeService from "@services/changeThemeService";    

import SearchPage from "@pages/SearchPage/SearchPage";
import GlossaryPage from "@pages/GlossaryPage/GlossaryPage";
import ConfigPage from "@pages/ConfigPage/ConfigPage";
import Word from "@components/Word";

import ScrollToTop from "@components/ScrollToTop";

import SubContent from "@template/components/SubContent";
import { useEffect } from "react";

function Navigation() {
    const { currentTheme } = changeThemeService;

    useEffect(() => {
        const savedTheme = currentTheme();

        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    return(
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route element={<Template />}>
                    <Route
                        path="/"
                        element={
                            <SearchPage />
                        } />
                    <Route
                        path="/glossary"
                        element={
                            <GlossaryPage />
                        } />
                    <Route
                        path="/configuration"
                        element={
                            <ConfigPage />
                        } />
                    <Route
                        path="/word/:wordName"
                        element={
                            <SubContent>
                                <Word />
                            </SubContent>
                        } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;