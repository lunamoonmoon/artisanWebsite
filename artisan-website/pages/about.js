import Navbar from "./navbar";
import styles from "../styles/style.module.css";

export default function About() {

  return (
    <div className="about">
      <Navbar/>
       <div className="image">
       </div>
       <div className="text">
        <header>Christian Tervo</header>
        <p>
          Christian is a recent University of Victoria graduate from their department of
          Theatre with a career focus in Props, with hopes to becoming a props master
          in the theatre industry. His theatrical focus also extends into scenic carpentry,
          scenic painting, and puppet fabrication.
        </p>
       </div>
    </div>
  );
}