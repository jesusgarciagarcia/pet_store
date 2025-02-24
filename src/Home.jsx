
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'

export default function Home() {

    const [count, setCount] = useState(0)
    const [isPar, setIsPar] = useState(true)

    useEffect(() => {
      setIsPar(count % 2 === 0)
    }, [count]);

    return (
    <>
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((contador) => contador + 1)}>
          count is {count}
        </button>
        <br/>
        <br/>
        <>{isPar
          ? <h2>ES PAR</h2>
          : <label>es impar</label>}
        </>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </>)
}