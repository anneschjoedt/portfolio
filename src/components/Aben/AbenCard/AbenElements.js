import styled from "styled-components";
import image from "../../../images/aben/image.png";
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
    width: 100%;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  width: 750px;
  transition: all 0.2s ease-in-out;
  overflow: no;
  background-image: url(${image});
  text-decoration: none;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 200px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceCardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const ServicesIcon = styled.img`
  width: 100%;
  backdrop-filter: blur(10px);
  background-size: 300px 100px;
  padding: 30px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding-left: 20px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 15px;
  color: white;
`;

export const ServicesP = styled.p`
  font-size: 18px;
  color: white;
`;

export const ServiceTextWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: space-around;
  padding: 20px;
  transition: all 0.8s ease;
`;
