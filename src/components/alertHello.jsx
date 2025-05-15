import React from 'react'

function AlertHello() {

    return (
        <div>
            <button onClick={() => alert('Hola')}>Show Hello</button>
        </div>
    )
}

export { AlertHello }