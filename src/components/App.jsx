import { Routes, Route } from "react-router";
import Layout from './layout/Layout.jsx'
import Home from './home/Home.jsx'
import Pets from './pets/Pets.jsx'
//import Store from './store/Store.jsx'
import PetsContextProvider from './pets/PetsContext.jsx'

import './App.css'
//import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
    return(
        <PetsContextProvider value={[]}>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/pets" element={<Pets />} />
                    {/*<Route path="/store" element={<Store />} />*/}
                </Route>
            </Routes>
        </PetsContextProvider>
    );
}