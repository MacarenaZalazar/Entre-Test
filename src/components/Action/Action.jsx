import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
align-items: center;
color: #B9B9B9;
font-style: normal;
font-weight: 500;
font-size: 12.4979px;
line-height: 190%;
    img{
        padding:3px; 
    }
`

const Action = ({img, text}) => {
    return (
        <Container>
            <img src={img} alt="" />
            <p>{text}</p>
        </Container>
    );
};

export default Action;