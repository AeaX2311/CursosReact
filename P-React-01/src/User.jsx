export function UserCard({name, address, amount, points}) {
    return <div>
        <h1>Hola {name}</h1>
        <div>
            <p>${amount}</p>
            <ul>
                <li>{address.street}</li>
                <li>{address.number}</li>
            </ul>
        </div>
    </div>
}

