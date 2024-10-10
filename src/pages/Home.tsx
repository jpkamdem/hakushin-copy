import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles["title-container"]}>
          <h1>Hakush.in</h1>
          <h2>The Fastest Honkai: Star Rail companion</h2>
        </section>
      </div>
    </>
  );
}
