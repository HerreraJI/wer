import React from 'react'

export const MiComponente = () => {
    const user = {
        name: 'Juan',
        lastName: 'Ignacio',
        age: 36,
    }
    return (
        <div>{user.age}</div>
    )
}
