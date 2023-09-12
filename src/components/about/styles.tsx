import styled from 'styled-components';

export const ContainerAbout = styled.section`
    display: flex;
    flex-flow: column;
    position: relative;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-flow: column;
    width: 36.5rem;
    height: 3.0625rem;
    justify-content: center;
    flex-shrink: 0;
    position: absolute;
    top: 41%;
    right: 1%;
`;

export const Text = styled.p`
    color: #000;
    width: 36.5rem;
    height: 23.25rem;
    flex-shrink: 0;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 3rem;
    text-align: left;
`;

export const Title = styled.h3`
    color: #FF6224;
    font-family: Open Sans;
    font-size: 4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 9.625rem;
    text-align: left;
`;
