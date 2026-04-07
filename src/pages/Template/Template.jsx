import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

import { WordsProvider } from "../../contexts/WordsContext"

function Template({ children }) {
    return (
        <WordsProvider>
            <div className="flex flex-col min-h-screen overflow-x-hidden">
                <Header />
                <Content>
                    { children }
                </Content>
                <Footer />
            </div>
        </WordsProvider>
    );
}

export default Template