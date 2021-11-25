import styled from "styled-components"

export const Container = styled.div`
    background-color: #e5e5e5;
    width: 300px;
    border-radius: 10px;
`

export const DivCustom = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 20px;
    justify-content: space-between;
`


export const DivList = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 95%;
    margin-left: 2.5%;
    font-size:18px;
    height: 600px;
    align-self: center ;
    
`

export const User = styled.div`
  display:flex;
  flex:1 ;
  flex-direction:row;
  background-color: red;
  width:95%;
  justify-content:flex-start;
  align-items: center;
  margin-top:10px;
  border: solid;
  margin-left:1.25%;
  font-size: 18px;
  padding: 2px;
  text-align: center;
  justify-content: center;
  color: white;
`;

export const MainDiv=styled.div`
&:hover {
    background-color: blue;
    cursor:pointer;
}
`;