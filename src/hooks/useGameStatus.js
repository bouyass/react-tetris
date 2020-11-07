import  {useState, useEffect, useCallback} from 'react'
import { createStage } from '../gameHelpers'

export const useGameStatus = rowsCleaned => {

    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    const linePoints = [40,100,300,1200]
    
    const calcScore = useCallback(() => {
        if(rowsCleaned > 0){
            setScore(prev => prev + linePoints[rowsCleaned - 1] * (level + 1))
            setRows(prev => prev + rowsCleaned)
        }
    }, [level, linePoints, rowsCleaned])

    useEffect(() => {
        calcScore()
    }, [calcScore, rowsCleaned, score])

    return [score, setScore, rows, setRows, level, setLevel]

}
