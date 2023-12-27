import { useState } from "react"
import Formulario from "./Componentes/Formulario"
import Buscador from "./Componentes/Buscador"
import Listado from "./Componentes/Listado"
import { BaseColaboradores } from "./basecolaboradores"
import Alert from "./Componentes/Alert"

const App = () => {
 
  const [clientes, setClientes] = useState(BaseColaboradores) 
  const [mostrarMensaje, setMostrarMensaje] = useState(false)
  const [clase, setClase] = useState('')
  const [mensaje, setMensaje] = useState('')

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Buscador clientes={clientes} setClientes={setClientes}/>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <Listado clientes={clientes}/>
        </div>
        <div className="col">
          <Formulario 
            clientes={clientes} 
            setClientes={setClientes} 
            setMostrarMensaje={setMostrarMensaje} 
            setMensaje={setMensaje}
            setClase={setClase}
          />
          <Alert mostrarMensaje={mostrarMensaje} clase={clase} mensaje={mensaje} />
        </div>
      </div>
    </div>
  )
}

export default App