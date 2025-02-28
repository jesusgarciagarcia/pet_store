import MainSection from "../common/MainSection";
import Inventory from "./Inventory";
import useSearchInventory from "./useSearchInventory";

export default function Store(){
    const {inventory, search} = useSearchInventory();
    return (
    <>
        <button onClick={search}>BUSCAR INVENTARIO</button>
        <MainSection title="Añadir Producto">
            <form id="add-product-form">
                <input type="text" id="product-name" placeholder="Nombre del producto" required/>
                <input type="text" id="product-category" placeholder="Categoría" required/>
                <button type="submit">Añadir</button>
            </form>
        </MainSection>
        <section>
            <h2>Total de productos: <span id="total-products">0</span></h2>
        </section>
        <Inventory inventory={inventory}/>
    </>)
}