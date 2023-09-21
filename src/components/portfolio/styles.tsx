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
`;

export const ImagePort = styled.img`
    width: 10rem;
    height: 13rem;
`;

export const BtnPort = styled.button`
    background: var(--bg-orange);
    width: 20rem;
    height: 2rem;
    margin: 2rem;
    color: #260A00;
    font-size: 0.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2rem;
    border-radius: 8px;

    &:hover {
        background:  #9d3c16;
    }
`;
