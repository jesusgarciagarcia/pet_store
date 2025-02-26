import { Outlet } from "react-router";

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import styles from "./Layout.module.css";

export default function Layout() {
    return (<>
        <Header/>
        <main className={styles.main}>
            <Outlet/>
        </main>
        <Footer/>
    </>);
}
