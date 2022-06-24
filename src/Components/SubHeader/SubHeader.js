import styled from 'styled-components';

const SubHeader = styled.h2`
    color: ${props => props.theme.subheader_color}
    font-size: ${props => props.theme.subheader_size};
    display: block;
`;

export default SubHeader;