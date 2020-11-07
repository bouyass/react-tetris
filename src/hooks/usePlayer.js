import {useState, useCallback} from 'react'
import { checkCollision, STAGE_WIDTH } from '../gameHelpers'
import  { TETROMINOS, randomTetroMinos } from '../tetrominos'


export const usePlayer = () => {

    const gamer= {
        pos: {x:0, y:0},
        tetromino: TETROMINOS[0].shape,
        collided: false,
    }

    const updatePlayerPos = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev, 
            pos:{x: prev.pos.x += x, y: prev.pos.y += y},
            collided
        }))
    }

    const rotate = (matrix, dir) => {
        // make the rows to become cols 
        const rotatedTetro = matrix.map((_, index) => 
            matrix.map(col => col[index])
        )

        if(dir > 0){
            return rotatedTetro.map(row => row.reverse())
        }

        return rotatedTetro.reverse()
    }

    const playerRotate = (stage, dir) => {
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir)

        

        setPlayer(clonedPlayer)
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos: {x: STAGE_WIDTH/2 - 2, y:0},
            tetromino: randomTetroMinos().shape
        }, [])
    })
    
    const[player, setPlayer] = useState(gamer) 

    return [player, updatePlayerPos, resetPlayer, playerRotate]

} 



