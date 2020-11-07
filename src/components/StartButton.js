import React from 'react'
import {StyledStartButton} from './styles/StyledStartButton'

function StartButton({ callback }) {
    return (
        <StyledStartButton onClick={callback}>
            start game
        </StyledStartButton>
    )
}

export default StartButton
