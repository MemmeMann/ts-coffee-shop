import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.center}
          src="/The_Big_Bean_Logo.svg"
          alt="The_Big_Bean_Logo"
          width={150}
          height={170}
          priority
        />
        <ol>
          <li>
            Best Coffee in the world!
          </li>
          <li>Check out our vast inventory of products.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Menu
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            About us
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a>
          Established 2025
        </a>
      </footer>
    </div>
  );
}
