import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Calculadora IMC</h1>
            <hr />
        </header>
    )
}

export default Header;