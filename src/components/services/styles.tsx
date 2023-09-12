import styled from 'styled-components';

export const ServiceSection = styled.section`
    background: #260A00;
`;

export const TitleSection = styled.h1`
    color: #D9D9D9;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: 154px; 
`;

export const ContainerServices = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 508px;
    height: 638px;
    margin: 20px;
    background: #D9D9D9;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 508px;
    height: 638px;
    padding: 30px;
`;

export const ImageService = styled.img`
    width: 508px;
    height: 285px;
`;

export const TitleService = styled.h4`
    color: #260A00;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: 48px;
`;

export const Description = styled.p`
    color: #260A00;
    text-align: center;
    font-family: Open Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    padding-top: 40px;
`;
