import styles from "./hero-section.module.scss";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className={styles.HeroSection}>
      <Image src="/images/CurvedHeroGradient.png" layout="fill" />
      <Image src="/images/WavesTransparency.png" layout="fill" />
    </div>
  );
}
