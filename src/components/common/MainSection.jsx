import styles from "./MainSection.module.css";

export default function MainSection({title, children}){
    return (
        <section className={styles["main-section"]}>
            <h2>{title}</h2>
            {children}
        </section>)
}