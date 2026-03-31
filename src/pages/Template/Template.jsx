import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

function Template({ children }) {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            <Header />

            <Content>
                {children}
            </Content>

            <Footer />
        </div>
    );
}

export default Template