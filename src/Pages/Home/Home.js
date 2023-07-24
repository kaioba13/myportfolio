import styles from "./Home.module.css";
import img from "../../Assets/photo_resized.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.home}>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={img} alt="Foto de Kaio" />
          </div>

          <div>
            <h1>Desenvolvedor C# (.NET)</h1>
            <p>Localizado em São Paulo 🏠</p>
          </div>
        </div>
        <nav>
          <ul className={styles.menu}>
            <li>
              <a href="/">SOBRE MIM</a>
            </li>
            <li>
              <a href="/">PROJETOS</a>
            </li>
            <li>
              <a href="/">CONTATO</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
