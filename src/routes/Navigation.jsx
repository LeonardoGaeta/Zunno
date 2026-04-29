import { BrowserRouter, Routes, Route } from "react-router-dom";

import Template from "@pages/Template/Template";

import InfoPage from "@pages/InfoPage/InfoPage";
import SearchPage from "@pages/SearchPage/SearchPage";
import GlossaryPage from "@pages/GlossaryPage/GlossaryPage";
import TranslatePage from "@pages/TranslatePage/TranslatePage";
import ConfigPage from "@pages/ConfigPage/ConfigPage";

import Word from "@pages/Components/Word";
import SubContent from "@pages/Template/components/SubContent";

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
                        path="/info"
                        element={
                            <InfoPage />
                        } />
                    <Route
                        path="/translate"
                        element={
                            <TranslatePage />
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