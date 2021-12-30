import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 30px;
    width: 389px;
    height: 266.54px;
    background: #FFFFFF;
    border-radius: 16.7412px;
`

export const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 180%;
    width:90%;
    display: flex;
    justify-content: space-between;
`

export const ImagesCont = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    .number{  
        padding-top: 3px;
        color:#4F4F4F;
        font-style: normal;
        font-weight: 600;
        font-size: 14.9816px;
        line-height: 190%;
        color:#828282;
        align-self: flex-start;
    }
`

export const Item = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    .blue{
        border: 3px solid rgba(51, 204, 255, 0.5);
    }
    p{
        font-style: normal;
        font-weight: 250;
        font-size: 11px;
        line-height: 25px;
    }
`
export const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
`
export const Button = styled.div`
    background: #33CCFF;
    border-radius: 10px;
    padding: 20px;
    width: 85%;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
`