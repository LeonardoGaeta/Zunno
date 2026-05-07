import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

import { WordsProvider } from "@contexts/WordsContext"

function Template() {
    return (
        <WordsProvider>
            <div className="flex bg-(--bg) flex-col h-screen overflow-hidden text-2xl">
                <Header />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </div>
        </WordsProvider>
    );
}

export default Template