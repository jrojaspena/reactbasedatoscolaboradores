const Alert = ({mostrarMensaje, clase, mensaje}) => {
    return (
      <div>
        {mostrarMensaje && <p className={clase}>{mensaje}</p>}
      </div>
    )
  }
  
  export default Alert