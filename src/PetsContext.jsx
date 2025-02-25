import { createContext, useContext, useState, useEffect } from 'react';

export const PetsContext = createContext({});

export default function PetsContextProvider({children}) {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        const getPets = async () => {
            const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
            const data = await response.json();
            return data;
        }
        getPets().then(data => {
            setPets(data);
            setLoading(false);
        });
    }, []);

    function search(){
        const getPets = async () => {
            const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
            const data = await response.json();
            return data;
        }
        getPets().then(data => {
            setPets(data);
            setLoading(false);
        });
    }

    function remove(id){
        fetch(`https://petstore3.swagger.io/api/v3/pet//${id}`, {
            method: 'DELETE'
        })
        .finally(() => {
            setPets(pets.filter(pet => pet.id !== id));
        });
    }

    return <PetsContext.Provider value={{pets, loading, search, remove}}>{children}</PetsContext.Provider>
}

export const usePets = () => useContext(PetsContext);