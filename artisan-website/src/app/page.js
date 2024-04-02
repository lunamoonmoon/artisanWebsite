import styles from "./page.module.css";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Navbar />
        <Home />
        <Footer />
      </div>
    </main>
  );
}
