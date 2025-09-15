import { useState } from 'react'
import btn from './Button.module.css'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const myStyles = {
        color: "red",
        background : "navy"
    }

    return (
        <>
            <h1 style={{ fontStyle: 'normal' }}>Ready for an <b><i>adventure</i></b>?</h1>
            <div className="card">
                <button className={btn.newButton} onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>
                <p style={{backgroundColor : "saddlebrown"}}>
                    Welcome to the Fellowship
                </p>
                <button style={myStyles} onClick={() => setCount((count) => count - 1)}>
                Join!
                </button>
            </div>
        </>
  )
}

export default App
