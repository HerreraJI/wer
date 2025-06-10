import { createRoot } from 'react-dom/client'
import MiComponente from './MiComponente'
import { Boton } from './Boton'
import './main.css'

createRoot(document.getElementById('root')).render(
  <section className='main'>
    <MiComponente userName="@juanIgnacio" />
    <Boton />
    <Boton />
    <Boton/>


  </section>
)
