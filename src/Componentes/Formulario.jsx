import { useState} from "react"


const Formulario = ({clientes, setClientes, setMostrarMensaje, setClase, setMensaje}) => {
  const [nombre, setName] = useState('')
  const [correo, setEmail] = useState('')
  const [edad, setEdad] = useState('')
  const [cargo, setCargo] = useState('')
  const [telefono, setTelefono] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      setMostrarMensaje(true);
      setMensaje('Completa todos los campos')
      setClase('alert alert-success mt-4')
    } else{
      setMostrarMensaje(false)
      setName('')
      setEmail('')
      setEdad('')
      setCargo('')
      setTelefono('')
      const cliente = {nombre, correo, edad, cargo, telefono }
      setClientes([...clientes, cliente])
      setMostrarMensaje(true);
      setMensaje('Cliente agregado')
      setClase('alert alert-danger mt-4')
    }
  }

  return (
    <div className="card d-inline-flex p-3">
      <div className="card-body d-flex flex-column ">
        <h1>Agregar colaborador</h1>
        <br />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="name" 
                value={nombre} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nombre del colaborador" />
            </div>
            <div className="mb-3">
                <input 
                type="email" 
                className="form-control" 
                id="email" value={correo} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email del colaborador" />
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="edad" 
                value={edad} 
                onChange={(e) => setEdad(e.target.value)} 
                placeholder="Edad del colaborador" />
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="cargo" value={cargo} 
                onChange={(e) => setCargo(e.target.value)} 
                placeholder="Cargo del colaborador" />
            </div>
            <div className="mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="telefono" 
                value={telefono} 
                onChange={(e) => setTelefono(e.target.value)} 
                placeholder="Teléfono del colaborador" />
            </div>
            <button type="submit" className="btn btn-primary w-100">Agregar colaborador</button>
            <br />
        </form>

      </div>
  </div>

  )
}

export default Formulario 