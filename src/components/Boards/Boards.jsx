import React, { useEffect, useState } from 'react'

function Boards() {

    const [token, setToken] = useState("")

    useEffect(() => {
    const token = localStorage.getItem('authToken')
    console.log("este es el token", token)
    setToken(token)
    }, [])

    return (
        <div>
            <h1>Boards</h1>
            <p>{token}</p>
        </div>
    )
}

export default Boards
