import { useEffect, useState } from "react"


const Buscador = ({clientes, setClientes}) => {

  const [criterio, setCriterio] = useState('')
  const [clientesOriginales, setClientesOriginales] = useState(clientes);

  const filtrarLista = () => {
    if (criterio === '') {
      setClientes(clientesOriginales)
      return
    }

    const filtrados = clientesOriginales.filter((e) => {
      const criterioAux = criterio.toLocaleLowerCase();
      if (e.nombre.toLocaleLowerCase().includes(criterioAux) ||
          e.correo.toLocaleLowerCase().includes(criterioAux) ||
          e.edad.toLocaleLowerCase().includes(criterioAux) ||
          e.cargo.toLocaleLowerCase().includes(criterioAux) ||
          e.telefono.toLocaleLowerCase().includes(criterioAux)) {
        return e;
      }
    })

    setClientes(filtrados)
  }

  useEffect(filtrarLista, [criterio])

  return (
    <div>
      <br />
      <h1>Lista de Colaboradores</h1>
      <form>
      <div className="input-group mb-3">
          <input 
            type="text" 
            value={criterio}
            onChange={(e) => setCriterio(e.target.value)} 
            className="form-control" 
            placeholder="Busca un colaborador" 
            aria-label="Username" 
            aria-describedby="basic-addon1"
          />
      </div>

      </form>
    </div>
  )
}

export default Buscador