import { FILAS } from "./global"



export const movimientosPiezasBlancas = (index: number, tablero, [piezaSeleccionada, setPiezaSeleccionada]) => {
  if(piezaSeleccionada){
    switch (tablero[piezaSeleccionada]) {
      case 'peon-b':
        const movimientoInicioPeon = [8,9,10,11,12,13,14,15]
        if(movimientoInicioPeon.some( index => index == piezaSeleccionada)){
          if((index - 8) == piezaSeleccionada && tablero[index] == null){
            tablero[piezaSeleccionada] = null
            tablero[index] = 'peon-b'
            setPiezaSeleccionada(null)
          }
          if((index - 16) == piezaSeleccionada && tablero[index] == null && tablero[index-8] == null){
            tablero[piezaSeleccionada] = null
            tablero[index] = 'peon-b'
            setPiezaSeleccionada(null)
          }
          if(((index - 9) == piezaSeleccionada || (index - 7) == piezaSeleccionada) && tablero[index]){
            const filaPrincipal = FILAS.findIndex( ele => ele.some( res => res == piezaSeleccionada ) )
            const filaMovimiento = FILAS.findIndex( ele => ele.some( res => res == index ) )
            if((filaPrincipal + 1) == filaMovimiento){
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-b'
              setPiezaSeleccionada(null)
            }
          }
        }else{
          if((index - 8) == piezaSeleccionada && tablero[index] == null){
            if(FILAS[7].some( res => res == index )){
              console.log('cambioDePieza')
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-b'
              setPiezaSeleccionada(null)
            }else{
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-b'
              setPiezaSeleccionada(null)
            }
          }
          if(((index - 9) == piezaSeleccionada || (index - 7) == piezaSeleccionada) && tablero[index] ){
            const filaPrincipal = FILAS.findIndex( ele => ele.some( res => res == piezaSeleccionada ) )
            const filaMovimiento = FILAS.findIndex( ele => ele.some( res => res == index ) )
            if((filaPrincipal + 1) == filaMovimiento){
              if(FILAS[7].some( res => res == index )){
                console.log('cambioDePieza')
                tablero[piezaSeleccionada] = null
                tablero[index] = 'peon-b'
                setPiezaSeleccionada(null)
              }else{
                tablero[piezaSeleccionada] = null
                tablero[index] = 'peon-b'
                setPiezaSeleccionada(null)
              }
            }
          }
          
        }

      break;
    
      default:
      break;
    }
  }
}


export const movimientosPiezasNegras = (index: number, tablero, [piezaSeleccionada, setPiezaSeleccionada]) =>{
  if(piezaSeleccionada){
    switch (tablero[piezaSeleccionada]) {
      case 'peon-n':
        const movimientoInicioPeon = [48,49,50,51,52,53,54,55]
        if(movimientoInicioPeon.some( index => index == piezaSeleccionada)){
          if((index + 8) == piezaSeleccionada && tablero[index] == null){
            tablero[piezaSeleccionada] = null
            tablero[index] = 'peon-n'
            setPiezaSeleccionada(null)
          }
          if((index + 16) == piezaSeleccionada && tablero[index] == null && tablero[index+8] == null){
            tablero[piezaSeleccionada] = null
            tablero[index] = 'peon-n'
            setPiezaSeleccionada(null)
          }
          if(((index + 9) == piezaSeleccionada || (index + 7) == piezaSeleccionada) && tablero[index]){
            const filaPrincipal = FILAS.findIndex( ele => ele.some( res => res == piezaSeleccionada ) )
            const filaMovimiento = FILAS.findIndex( ele => ele.some( res => res == index ) )
            if((filaPrincipal - 1) == filaMovimiento){
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-n'
              setPiezaSeleccionada(null)
            }
          }
        }else{
          if((index + 8) == piezaSeleccionada && tablero[index] == null){
            if(FILAS[0].some( res => res == index )){
              console.log('cambioDePieza')
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-n'
              setPiezaSeleccionada(null)
            }else{
              tablero[piezaSeleccionada] = null
              tablero[index] = 'peon-n'
              setPiezaSeleccionada(null)
            }
          }
          if(((index + 9) == piezaSeleccionada || (index + 7) == piezaSeleccionada) && tablero[index] ){
            const filaPrincipal = FILAS.findIndex( ele => ele.some( res => res == piezaSeleccionada ) )
            const filaMovimiento = FILAS.findIndex( ele => ele.some( res => res == index ) )
            if((filaPrincipal - 1) == filaMovimiento){
              if(FILAS[0].some( res => res == index )){
                console.log('cambioDePieza')
                tablero[piezaSeleccionada] = null
                tablero[index] = 'peon-n'
                setPiezaSeleccionada(null)
              }else{
                tablero[piezaSeleccionada] = null
                tablero[index] = 'peon-n'
                setPiezaSeleccionada(null)
              }
            }
          }
          
        }
      break;

      case 'peon-n':
      break;

    
      default:
      break;
    }
  }
}