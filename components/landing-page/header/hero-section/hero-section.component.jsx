import styles from "./hero-section.module.scss";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <div className={styles.HeroSection}>
        <Image src="/images/CurvedHeroGradient.png" layout="fill" />
        <Image src="/images/WavesTransparency.png" layout="fill" />
        <div className={styles.HeroContent}>
          <div className={styles.HeroText}>
            <span className={styles.Brasvid}>Brasvid</span>
            <span className={styles.BrasvidText}>
              Vestibulum sollicitudin ipsum id mi tempus, sed semper tortor
              eleifend. Donec mollis id arcu quis euismod.
            </span>
          </div>
          <div className={styles.WindShield}>
            <Image
              src="/images/WindShield.png"
              height={370}
              width={477}
              layout="fixed"
            />
          </div>
          <div className={styles.WindShields}>
            <div className={styles.WindShield}>
              <Image
                src="/images/WindShield.png"
                height={370}
                width={477}
                layout="fixed"
              />
            </div>
            <div className={styles.WindShield}>
              <Image
                src="/images/WindShield.png"
                height={370}
                width={477}
                layout="fixed"
              />
            </div>
            <div className={styles.WindShield}>
              <Image
                src="/images/WindShield.png"
                height={370}
                width={477}
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
