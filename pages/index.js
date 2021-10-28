import Head from "next/head";
import LandingPage from "../components/landing-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brasvid</title>
        <meta name="description" content="Solução em vidros curvos" />
        <link rel="icon" href="/images/LightBlueWhiteIcon.ico" />
      </Head>

      <main>
        <LandingPage />
      </main>

      <footer></footer>
    </div>
  );
}
