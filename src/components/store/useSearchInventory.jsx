import { useState, useEffect } from "react";

export default function useSearchInventory() {
    const [inventory, setInventory] = useState({});

    function search()
    {
        const getProducts = async () => {
            const response = await fetch('https://petstore3.swagger.io/api/v3/store/inventory')
            const data = await response.json()
            return data;
        }

        getProducts().then(data => {
            setInventory(data)
        });
    }

    useEffect(() => {
        search();
    }, [])

    return {inventory, search}
}