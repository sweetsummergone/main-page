import { Route, Routes } from "react-router-dom";

import Sakura from "../Sakura/Sakura";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

export default function App() {
    return (
        <main className="page">
            <Sakura />
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<Content />}
                />
                <Route
                    path="projects"
                    element={<Projects />}
                />
            </Routes>
            <Footer />
        </main>
    )
}