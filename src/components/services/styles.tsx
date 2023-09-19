import styled from 'styled-components';

export const ServiceSection = styled.section`
    background: #260A00;
`;

export const TitleSection = styled.h1`
    color: #D9D9D9;
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 5rem; 
    padding-top: 1rem;
    text-transform: uppercase;
`;

export const ContainerServices = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 85%;
    margin: auto;
    padding-bottom: 2rem;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 12.5rem;
    height: 17rem;
    margin: 20px;
    background: #D9D9D9;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 12.5rem;
    margin: auto;
    gap: 1rem;
`;

export const ImageService = styled.img`
    width: 100%;
`;

export const TitleService = styled.h4`
    color: #260A00;
    text-align: center;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.7rem;
    width: 100%;
`;

export const Description = styled.p`
    color: #260A00;
    text-align: center;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9rem;
    padding-inline: 1rem;
`;
