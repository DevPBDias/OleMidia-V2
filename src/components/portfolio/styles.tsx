import styled from 'styled-components';

export const PortSection = styled.section`
    background: #D9D9D9;
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
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    justify-items: center;
    align-items: center;
`;

export const ImagePort = styled.img`
    width: 376px;
    height: 470px;
    flex-shrink: 0;
    margin: 10px;
`;

export const BtnPort = styled.button`
    background: #FF6224;
    width: 526px;
    height: 53px;
    flex-shrink: 0;
    margin: 40px;
    color: #260A00;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
