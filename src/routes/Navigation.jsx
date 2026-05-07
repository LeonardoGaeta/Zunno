import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "@template/Template";

import SearchPage from "@pages/SearchPage/SearchPage";
import GlossaryPage from "@pages/GlossaryPage/GlossaryPage";
import ConfigPage from "@pages/ConfigPage/ConfigPage";
import Word from "@components/Word";

import SubContent from "@template/components/SubContent";

function Navigation() {
    return(
        <BrowserRouter>
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