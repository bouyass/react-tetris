import React from 'react'
import {StyledCell} from './styles/StyledCell'
import {TETROMINOS} from '../tetrominos'

function Cell({ type }) {
    return (
        <div>
            <StyledCell type={type} color={TETROMINOS[type].color}> 
                {console.log('rerendered')}
            </StyledCell>
        </div>
    )
}

export default React.memo(Cell)
