import React from 'react'
import styled from 'styled-components'
import SubHeader from '../SubHeader'
import devices from '../../devices';

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0.3rem 0.5rem 0 ${(props) => props.theme.card.shadow};
  padding: ${(props) => `${props.theme.base_space / 2}rem`}
    ${(props) => `${props.theme.base_space}rem`};
  background-color: ${(props) => props.theme.card.background};
  max-height: ${(props) => `${props.theme.card.max_height}rem`};
//   max-width: ${(props) => `calc(50% - ${props.theme.base_space / 2}rem)`};

  @media ${devices.mobile} { 
    max-width: 100%;
  }

  @media ${devices.small_tablet} { 
    max-width: ${(props) => `calc(50% - ${props.theme.base_space / 2}rem)`};
  }

  @media ${devices.tablet} { 
    max-width: ${(props) => `calc(50% - ${props.theme.base_space / 2}rem)`};
  }

  @media ${devices.desktop} { 
    max-width: ${(props) => `calc(33% - ${props.theme.base_space * 0.66}rem)`};
  }

  @media ${devices.large_desktop} { 
    max-width: ${(props) => `calc(33% - ${props.theme.base_space * 0.66}rem)`};
  }
`

const Card = ({ title, children, theme }) => {
  return (
    <StyledCard>
      {title && <SubHeader theme={theme}>{title}</SubHeader>}
      {children}
    </StyledCard>
  )
}

export default Card
