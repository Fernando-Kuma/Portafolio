export const Cuadro = ({seleccionarPieza, index, pieza, piezaSeleccionada}) => {
  const className = `square ${piezaSeleccionada == index ? 'pieza-seleccionada ' : ''}`
  
  const handleClick = () => {
    seleccionarPieza(index)
  }   
  
  const contador = (index + Math.trunc((index) / 8)) % 2 

  return (
      <div onClick={handleClick} className={className + ( contador == 0  ? 'blancas' : 'negras')} >
        <div className={pieza}></div>
      </div>
    )
} 