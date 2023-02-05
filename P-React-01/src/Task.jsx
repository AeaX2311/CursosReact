import './task.css'

export function TaskCard({ready}) {    
    return <div className='card'>
        <h1>Mi tarea no.1</h1>
        <p className={ready ? 'txt-green' : 'txt-red'}>{ready ? 'Tarea realizada' : 'Tarea pendiente'}</p>
    </div>
}