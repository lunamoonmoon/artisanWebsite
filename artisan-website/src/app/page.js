import styles from "../../styles/style.module.css";
import Home from "../../pages/home";
import Navbar from "../../pages/navbar";
import Footer from "../../pages/footer";

export default function Page() {
  return (
    <main className={styles.maincontainer}>
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    </main>
  );
}
