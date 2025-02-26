import styles from "./Pet.module.css";
import { usePets } from "./PetsContext";

export default function Pet({pet}) {
  const {remove} = usePets();
  return (
    <div key={pet.id} className={styles.card}>
      <h2>{pet.name}</h2>
      <p>Categoría: {pet.category ? pet.category.name : 'N/A'}</p>
      <button onClick={() => remove(pet.id)}>Eliminar</button>
    </div>
  )
}