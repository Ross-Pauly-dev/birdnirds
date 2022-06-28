import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: ${props => `${props.theme.base_space}rem`};
    gap: ${props => `${props.theme.base_space}rem`};
    color: ${props => props.theme.main_text_color};
    font-size: ${props => props.theme.main_text_size};
    width: 100%;
`;

export default CardContainer