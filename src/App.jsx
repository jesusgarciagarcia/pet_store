import { Routes, Route } from "react-router";
import Layout from './common/Layout.jsx'
import Home from './Home.jsx'
import Pets from './Pets.jsx'
import PetsContextProvider from './PetsContext.jsx'

import './App.css'

export default function App() {
    return(
        <PetsContextProvider value={[]}>
            <Routes>
                <Route element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/pets" element={<Pets />} />
                </Route>
            </Routes>
        </PetsContextProvider>
    );
}