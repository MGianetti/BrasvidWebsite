import Link from "next/link";
import styles from "./navigation-bar.module.scss";
import Logo from "../logo";

export default function NavigationBar() {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Serviços</a>
        </Link>
        <Link href="/">
          <a>Contato</a>
        </Link>
        <Link href="/">
          <a>Missão</a>
        </Link>
        <Link href="/">
          <a>Sobre a empresa</a>
        </Link>
      </ul>
    </nav>
  );
}
