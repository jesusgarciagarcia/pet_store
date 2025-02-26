import { useState } from "react"
import Modal from 'react-modal';
import { usePets } from "./PetsContext";
import styles from "./Pets.module.css";
import Pet from "./Pet";

Modal.setAppElement('#root');
export default function Pets() {

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

    const {pets, loading, search} = usePets();

    return (
      <>
        <section className={styles["add-pet-section"]}>
            <h2>Añadir Mascota</h2>
            <form onSubmit="addPet(event)">
                <input type="text" id="pet-name" placeholder="Nombre de la mascota" required/>
                <input type="text" id="pet-category" placeholder="Categoría" required/>
                <button type="submit">Añadir</button>
            </form>
        </section>
        <section>
            <h2>Total de Mascotas: <span id="total-pets">{pets.length}</span></h2>
        </section>
        <section id="pagination">
            <button id="prev-page" onClick="prevPage()" disabled>Anterior</button>
            <span id="current-page">Página 1</span>
            <button id="next-page" onClick="nextPage()" disabled>Siguiente</button>
        </section>
        <button onClick={() => setIsOpen(true)}>Show Modal</button>
        <section className={styles['card-container']}>
          {loading
            ? <p>Loading...</p>
            : pets.map(pet => (<Pet key={pet.id} pet={pet}/>))}
        </section>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen(false)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>Hello from modal</h2>
          <button onClick={() => setIsOpen(true)}>close</button>
          <div>I am a modal</div>
        </Modal>
      </>
    )
}