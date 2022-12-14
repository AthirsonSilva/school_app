import styled from 'styled-components'

export const Title = styled.h1`
    small {
        font-size: 1rem;
        margin-left: 1rem;
        color: #ccc;
    }

    font-size: 2rem;
    color: ${(props) => (props.isRed ? 'red' : 'blue')};
`

export const Paragraph = styled.p``
