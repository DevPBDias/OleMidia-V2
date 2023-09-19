import styled from 'styled-components';

export const ContainerOpening = styled.section`
    display: flex;
    width: 100%;
    flex-flow: column;
`;

export const ContainerContent = styled.div`
    position: absolute;
    width: 85%;
    top: 30%;
    left: 20%;
    transform: translateX(-14%);
    padding-top: 2rem;
`;

export const Text = styled.p`
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    text-align: left;
    line-height: 3.5rem;
`;

export const Arrow = styled.img`
    width: 1.5rem;
    height: 2.5rem;
    margin-left: 90%;
    margin-top: 2rem;
`;

export const BgOle = styled.img`
    width: 100%;
`;
