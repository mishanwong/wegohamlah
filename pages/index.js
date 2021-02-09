import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>Curated cycling routes around Seattle</h1>
        <p className={styles.subtitle}>by the We Go Ham Lah cycling club</p>
        <Link href="/routes" passHref>
          <PrimaryButton />
        </Link>
        <Link href="/about" passHref>
          <SecondaryButton />
        </Link>
      </div>
    </div>
  );
}
