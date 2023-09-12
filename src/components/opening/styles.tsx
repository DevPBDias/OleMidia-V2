import styled from 'styled-components';

export const ContainerOpening = styled.section`
    display: flex;
    flex-flow: column;
    position: relative;
`;

export const Text = styled.p`
    color: #D9D9D9;
    position: absolute;
    top: 30%;
    left: 8%;
    font-size: 5.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 9.625rem;
    text-align: left;
`;

export const Arrow = styled.img`
    width: 2.5rem;
    height: 4.6875rem;
    position: absolute;
    bottom: 10%;
    right: 8%;
    flex-shrink: 0;
`;
