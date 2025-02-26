import { Routes, Route } from "react-router";
import Layout from './layout/Layout.jsx'
import Home from './home/Home.jsx'
import Pets from './pets/Pets.jsx'
import PetsContextProvider from './pets/PetsContext.jsx'

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