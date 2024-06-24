import { useState } from "react"

export const TURNS = {
  B: 'Blancas',
  N: 'Negras'
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const PIEZAS_BLANCAS = ['torre-b','caballo-b','arfil-b','rey-b','reina-b','arfil-b','caballo-b','torre-b',
  'peon-b','peon-b','peon-b','peon-b','peon-b','peon-b','peon-b','peon-b'
]

export const PIEZAS_NEGRAS = [ 'peon-n','peon-n','peon-n','peon-n','peon-n','peon-n','peon-n','peon-n',
  'torre-n','caballo-n','arfil-n','rey-n','reina-n','arfil-n','caballo-n','torre-n'
]


export const FILAS = [
  [0,1,2,3,4,5,6,7,8],
  [9,10,11,12,13,14,15],
  [16,17,18,19,20,21,22,23],
  [24,25,26,27,28,29,30,31],
  [32,33,34,35,36,37,38,39],
  [40,41,42,43,44,45,46,47],
  [48,49,50,51,52,53,54,55],
  [56,57,58,59,60,61,62,63],
]