import styled from 'styled-components';

const SubHeader = styled.h2`
    font-size: ${props => props.theme.subheader_size};
    display: block;
    margin: 0;
    text-align: left;
    width: 100%;
`;

export default SubHeader;