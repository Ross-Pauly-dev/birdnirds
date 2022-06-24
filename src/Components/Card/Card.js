import React from 'react';
import styled, {useTheme} from 'styled-components';
import SubHeader from '@components/SubHeader';

const StyledCard = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0.3rem 0.5rem 0 ${props => props.theme.card_shadow};
    padding: ${props => props.theme.card_spacing};
    background-color: ${props => props.theme.card_background}
`;

const Card = (
    title,
    children
) => {

    const theme = useTheme()

    return (
        <StyledCard>
            {title && <SubHeader>{title}</SubHeader>}
            {children}
        </StyledCard>
    )
}

export default Card