import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header class="header">
            <Link className="header__link" to="/">Home</Link>
            <Link className="header__link" to="projects">Projects</Link>
        </header>
    )
}