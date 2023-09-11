import styled from 'styled-components';
import Image from '../../assets/BackgroundHome.svg';

export const ContainerOpening = styled.section`
    display: flex;
    flex-flow: column;
    width: 100%;
    height: 72,88%;
    margin-top: 9%;
    background: url(${Image}), lightgray 50% / cover no-repeat;
    background-size: 100%;
    padding: 1.25%;
`;

export const Text = styled.p`
    color: #D9D9D9;
    font-size: 5.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: 9.625rem;
    text-align: left;
    margin-left: 5%;
`;

export const Arrow = styled.img`
    width: 2.5rem;
    height: 4.6875rem;
    flex-shrink: 0;
    margin-left: 85%;
`;
