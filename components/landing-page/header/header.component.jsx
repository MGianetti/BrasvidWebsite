import styles from "./header.module.scss";
import NavigationBar from "../../shared/navigation-bar";
import HeroSection from "./hero-section";

export default function Header() {
  return (
    <div className={styles.Header}>
      <NavigationBar />
      <HeroSection />
    </div>
  );
}
