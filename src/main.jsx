import { createRoot } from 'react-dom/client'
import MiComponente from './MiComponente'
import { Boton } from './Boton'
import './main.css'
import { MiComponente2 } from './MiComponente2'

createRoot(document.getElementById('root')).render(
  <section className='main'>
    <MiComponente userName="@juanIgnacio" />
    <Boton />
    <Boton />
    <Boton/>
    <MiComponente2 />


  </section>
)
