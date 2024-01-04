import styles from "./button.module.css";

export default function Button({title}: any) {
    return (
        <button className={styles.button}>
            {title}
        </button>
    );
}