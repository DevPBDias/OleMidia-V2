import styled from 'styled-components';

export const ClientSection = styled.section`
    background: #FF6224;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const TitleSection = styled.h1`
    color: #260A00;
    font-size: 64px;
    font-style: normal;
    font-weight: 800;
    line-height: 154px; 
    text-transform: uppercase;
    margin-top: 20px;
`;

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 508px;
    height: 638px;
`;

export const ImageClient = styled.img`
    width: 408px;
    height: 533px;
    margin: 20px;
`;
