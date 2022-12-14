import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import PercentageContext from "./PercentageContext";

export default function Footer() {

  const {percentage} = useContext(PercentageContext)
  
  return (
    <FooterStyle>
     <Link to="/habitos"><p data-identifier="habit-page-action">Hábitos</p></Link>
      <CircularProgressbarStyle>
      <CircularProgressbarWithChildren
      value={percentage}
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#3e98c7",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent"
      })}><Link to="/hoje"><p>Hoje</p></Link></CircularProgressbarWithChildren>
      </CircularProgressbarStyle>
     <Link to="/historico"><p data-identifier="historic-page-action">Histórico</p></Link>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #FFFFFF;
  p {
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color: #52b6ff;
  }
  a{
    text-decoration: none;
  }
`

const CircularProgressbarStyle = styled.div`
width: 91px;
height: 91px;
position: fixed;
bottom:10px;
left:auto;
p{
    font-family: "Lexend Deca";
    font-weight: 400;
    font-size: 17.98px;
    line-height: 22.47px;
    color: #FFFFFF;
    margin-bottom: 7px;
}
`


