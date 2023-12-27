import Tabla from "./Tabla"


const Listado = ({clientes}) => {
  return (
    <div >  
      <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Edad</th>
              <th scope="col">Cargo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cli, index) => (
              <Tabla key={index} cliente={cli}/>
            ))}
            
          </tbody>

      </table>
     
    </div>
  )
}

export default Listado