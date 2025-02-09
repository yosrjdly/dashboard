
import { ThemeProviderWrapper } from "./context/ThemeContext";
import styles from "./page.module.css";
import Dashboard from "./pages/Dashboard";


export default function Home() {
  return (
    <ThemeProviderWrapper    <div className={styles.page}>
     <Dashboard/>
    </div>
  );
}
