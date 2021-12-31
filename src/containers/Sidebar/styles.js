import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 17.2583px 19.2887px;
    position: relative;
    width: 326.58px;
    height: 207.38px;
    background: #FFFFFF;
    border-radius: 15.7594px;
`
export const Header = styled.div`
    display: flex;
    width: 90%;
`
export const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    padding-left: 15px;
    .name{
        color: #18243A;
        font-style: normal;
        font-weight: bold;
        font-size: 15.7594px;
        line-height: 190%;
    }
`
export const Image = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    border-radius: 100%;
    width: 49.25px;
    height: 49.25px;
    box-sizing: border-box;
`
export const ActionCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
export const NumberCont = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
`

export const Button = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 52px;
    width: 60%;
    background: rgba(235, 87, 87, 0.1);
    border-radius: 12px;
    color: #EB5757;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 190%;
`