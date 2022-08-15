import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header class="header">
            <Link to="/">Main</Link>
            <Link to="projects">Projects</Link>
        </header>
    )
}