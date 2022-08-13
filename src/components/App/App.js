import Sakura from "../Sakura/Sakura";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

export default function App() {
    return (
        <main className="page">
            <Sakura />
            <Header />
            <Content />
            <Footer />
        </main>
    )
}