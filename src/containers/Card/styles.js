import styled from "styled-components";

export const Container = styled.div`
    width: 679px;
    height: 271px;
    background: #FFFFFF;
    border-radius: 12px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
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
    width: 80%;
`
export const Row =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 20px;
    width: 100%;
    .title{
        display: inline-flex;
    }
    .left{
        justify-self: start;
    }
    .right{
        justify-self: end;
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
    border: 0.10411px solid #000000;
    box-sizing: border-box;
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
    width: 623px;
    height: 81px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 190%;
    color: #000;
    padding: 10px;
  
`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
    width: 90%; 
`

