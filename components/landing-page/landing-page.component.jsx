import styles from "./landing-page.module.scss";
import Header from "./header";
import About from "./about";
import OurServices from "./our-services";
import Questions from "./questions";
import Brands from "./brands";

export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <OurServices />
      <Questions />
      <Brands />
    </>
  );
}
