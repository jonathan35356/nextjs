import Link from "next/link";
import styles from "../styles/navigation.module.css";

const links = [
  { label: "Home", route: "/posts" },
  { label: "About", route: "/about" },
  { label: "Services", route: "/services" },
];

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="#">
          Next First App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/users"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                Services
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
{
  /* <nav>
        <ul className="nav nav-pills">
          {links.map(({ label, route }) => (
            <li key={route} className="nav-item">
              <Link href={route} className="nav-link dropdown-toggle">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav> */
}
