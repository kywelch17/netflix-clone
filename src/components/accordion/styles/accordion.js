import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    border-bottom: 8px solid grey;
`;

export const Frame = styled.div`
    margin-bottom: 40px;
`;

export const Inner = styled.div`
    display: flex;
    padding: 70px 45px;
    flex-direction: column;
    max-width: 815px;
    margin: auto;
`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-top: 0;
    margin-bottom: 8px;
    color: white;
    text-align: center;
    @media (max-width: 600px) {
        font-size: 35px;
    }
`;

export const Item = styled.div`
    color: white;
    margin: auto;
    margin-bottom: 10px;
    max-width: 728px;
    width: 100%;
    &:first-of-type {
        margin-top: 3em;
    }
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const Header = styled.div`
    display: flex;
    cursor: pointer;
    font-size: 26px;
    font-weight: normal;
    background: grey;
    align-items: center;
    padding: 24px;
    &:hover {
        background-color: black;
    }
    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const Body = styled.div`
    font-size: 16px;
    font-weight: normal;
    line-height: normal;
    background: grey;
    white-space: pre-wrap;
    user-select: none;
    overflow: hidden;
    &.closed {
        max-height: 0;
        overflow: hidden;
    }
    &.open {
        max-height: 1200px;
        border-top: 2px dashed black
    }
    span {
        display: block;
        padding: 0.8em 2.2em 0.8em 1.2em;
    }
    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 22px;
    }
`;