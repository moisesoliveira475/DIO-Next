import styles from './button.module.css';

export default function Button({content}: IButtonProps) {
    return (
        <button className={styles.button} aria-label={content} title={content}>
            {content}
        </button>
    );
}