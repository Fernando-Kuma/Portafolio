
import { useEffect, useState } from 'react'
import './App.css'
import { Cuadro } from './components/Cuadro'
import { PIEZAS_BLANCAS, PIEZAS_NEGRAS, TURNS } from './utils/global'
import { movimientosPiezasBlancas, movimientosPiezasNegras } from './utils/movimientos'

function App() {

  const [board, setBoard] = useState( () => {
    const tablero = Array(8*8).fill(null)
    tablero.splice(0,16, ...PIEZAS_BLANCAS)
    tablero.splice(48,16, ...PIEZAS_NEGRAS)
    
    tablero.splice(16,1, ...['peon-n'])

    return tablero 
  }) 
  
  const [piezaSeleccionada, setPiezaSeleccionada] = useState(null)

  const [winner, setWinner] = useState(null)
  const [turn, setTurn] = useState(TURNS.B)
  useEffect( () => {
    if(piezaSeleccionada == null) setTurn(turn === TURNS.B ? TURNS.N : TURNS.B)
  }, [piezaSeleccionada])



  /* const piezaSeleccionada = null */
  const seleccionarPieza = (index: number) => {
    const turnoActivo = turn === TURNS.B ? '-b' : '-n'
    if(piezaSeleccionada != null){
      if(board[index] && board[index].includes(turnoActivo)){
        setPiezaSeleccionada(index)
      } else{
        if(turn === TURNS.B){
          movimientosPiezasBlancas(index, board, [piezaSeleccionada, setPiezaSeleccionada])
        }else{
          movimientosPiezasNegras(index, board, [piezaSeleccionada, setPiezaSeleccionada])
        }
      }
    }else{
      if(board[index] && board[index].includes(turnoActivo)) setPiezaSeleccionada(index)
    }
  }


  return (
    <main className="tablero">
      <h1>Ajedrez</h1>
      
      <section className="ajedrez">
        <div className="encabezado">
        {
            [1,2,3,4,5,6,7,8].map( (_, index) => {
              return (
                <div key={index}>
                  {_}
                </div>
              )
            })
          }
        </div>
        <div className="contenido">
          <section className="juego">
              {
                board.map( (pieza, index) => {
                  return (
                    <Cuadro key={index} 
                    index={index} pieza={pieza}
                    piezaSeleccionada={piezaSeleccionada} 
                    seleccionarPieza={seleccionarPieza}/>
                  )
                })
              }
          </section>
          <div className="esquina">
            {
                ['A','B','C','D','E','F','G','H'].map( (_, index) => {
                  return (
                    <div key={index}>
                      {_}
                    </div>
                  )
                })
              }
          </div>
          
        </div>
      </section>

      <button>Reset del juego</button>
    </main>
  )
}

export default App