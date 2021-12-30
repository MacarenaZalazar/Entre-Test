import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: #003399;
.number{
    font-style: normal;
    font-weight: bold;
    font-size: 17.5954px;
}
.text{
    font-style: normal;
    font-weight: 500;
    font-size: 12.8401px;
    line-height: 16px;
}
`

const Number = ({num, text}) => {
    return (
        <Container>
           <p className='number'>{num}</p>
           <p className='text'>{text}</p> 
        </Container>
    );
};

export default Number;