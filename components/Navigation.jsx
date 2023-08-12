import Link from "next/link";
import styles from "../styles/navigation.module.css";

const links = [
  { label: "Home", route: "/" },
  { label: "About", route: "/about" },
];

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
