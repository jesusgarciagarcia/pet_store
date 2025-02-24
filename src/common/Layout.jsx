import { Outlet } from "react-router";

import Header from './Header.jsx'

export default function Layout() {
    return (<>
    <Header></Header>
    <main>
        <Outlet/>
    </main>
    {/*<Footer></Footer>*/}
    </>);
}