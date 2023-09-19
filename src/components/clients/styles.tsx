import styled from 'styled-components';

export const ClientSection = styled.section`
    background: var(--bg-orange);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const TitleSection = styled.h1`
    color: #260A00;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 5rem; 
    text-transform: uppercase;
`;

export const ContainerCards = styled.div`
    width: 85%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    padding-bottom: 2rem;
`;

export const ImageClient = styled.img`
    width: 12.5rem;
    height: 18rem;
`;
