import React from "react";
import styles from "./maincomponent.module.css";

export default function MainComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.main}>{children}</main>
    </>
  );
}
