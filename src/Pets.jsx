import { useEffect, useState } from "react"
import Modal from 'react-modal';

Modal.setAppElement('#root');
export default function Pets() {
    const [pets, setPets] = useState([])
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
    useEffect(() => {
        const getPets = async () => {
            const response = await fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available');
            const data = await response.json();
            return data;
        }
        getPets().then(data => {
            setPets(data);
        });
    }, []);

    const deletePet = async (id) => {
        await fetch(`https://petstore3.swagger.io/api/v3/pet//${id}`, {
            method: 'DELETE'
        })
        .finally(() => {
            setPets(pets.filter(pet => pet.id !== id));
        });
    }

    return (<>
        <h2>Total Pets {pets.length}</h2>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello from modal</h2>
        <button onClick={() => setIsOpen(true)}>close</button>
        <div>I am a modal</div>
      </Modal>
        <button onClick={() => setIsOpen(true)}>Show Modal</button>
        <section>
            {pets.map(pet => (
                <div key={pet.id} className="card">
                    <h2>{pet.name}</h2>
                    <p>Categoría: {pet.category ? pet.category.name : 'N/A'}</p>
                    <button onClick={() => deletePet(pet.id)}>Eliminar</button>
                </div>
            ))}
        </section>
    </>
    )
}