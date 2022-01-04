import styled from "styled-components";

export const Container = styled.div`
    width: 679px;
    height: auto;
    background: #FFFFFF;
    border-radius: 12px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`
export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .link{
        color: #00A3FF;
        font-style: normal;
        font-weight: bold;
        font-size: 12.4932px;
        line-height: 150%;
        letter-spacing: 0.03em;
    }
    .big{
        font-style: normal;
        font-weight: bold;
        font-size: 20.8219px;
        color:#18243A;
        line-height: 150%;
    }
    .small{
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        color: #B9B9B9;
        line-height: 150%;
    }
`
export const Row =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    width: 97%;
    .title{
        display:flex;
        align-items: center;
    }
`

export const Price = styled.div`
display: flex;
align-items:center;
text-align: center;
margin: 0 10px;
justify-content:center;
width: 96px;
height: 21.33px;
background: #F6F6F6;
border-radius: 149.333px;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 14px;
color: #828282;
span{
    font-style: bold;
    font-weight: 700;
    font-size: 13px;
    line-height: 14px;
}
`

export const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 100%;
    width: 70.79px;
    height: 70.79px;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: flex-end;
    .pro{
        width: 34.8px;
        height: 18.74px;
        background: #003399;
        border-radius: 3.56947px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        p{
            font-style: normal;
            font-weight: 500;
            font-size: 10.7084px;
            line-height: 13px;
            color:#FFFF;
        }
    }
}
`

export const TextCont =  styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: auto;
`

export const Line = styled.div`
    width: 623px;
    height: 0px;
    border: 1px solid #E0E0E0;
`
export const Text = styled.div`
    width: 100%;
    height: auto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 190%;
    color: #000;
    padding: 10px;
    color: #4F4F4F;
    span{
        font-weight: bold;
        color:#003399;
    }
  
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%; 
    padding-top: 10px;
`

