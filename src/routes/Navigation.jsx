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
                <Route
                    path="/"
                    element={
                        <Template>
                            <SearchPage />
                        </Template>
                    } />
                <Route
                    path="/glossary"
                    element={
                        <Template>
                            <GlossaryPage />
                        </Template>
                    } />
                <Route
                    path="/info"
                    element={
                        <Template>
                            <InfoPage />
                        </Template>
                    } />
                <Route
                    path="/translate"
                    element={
                        <Template>
                            <TranslatePage />
                        </Template>
                    } />
                <Route
                    path="/configuration"
                    element={
                        <Template>
                            <ConfigPage />
                        </Template>
                    } />
                <Route
                    path="/word/:wordName"
                    element={
                        <Template>
                            <SubContent>
                                <Word />
                            </SubContent>
                        </Template>
                    } />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;