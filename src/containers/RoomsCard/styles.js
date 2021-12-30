import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px;
    position: relative;
    width: 389px;
    height: 266.54px;
    background: #FFFFFF;
    border-radius: 16.7412px;
`
export const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 100%;
    width: 70.79px;
    height: 70.79px;
    border: 0.10411px solid #000000;
    box-sizing: border-box;
`