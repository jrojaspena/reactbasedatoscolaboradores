const Tabla = ({cliente}) => {
    return (
      <tr>
        <td>{cliente.nombre}</td>
        <td>{cliente.correo}</td>
        <td>{cliente.edad}</td>
        <td>{cliente.cargo}</td>
        <td>{cliente.telefono}</td>
      </tr>
    )
  }
  
  export default Tabla