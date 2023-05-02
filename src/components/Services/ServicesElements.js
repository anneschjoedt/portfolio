import styled from "styled-components";
import image from "../../images/jobspire/jobspire.svg";

export const ServicesContainer = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* border-radius: 10px; */
  height: 450px;
  width: 500px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  overflow: no;

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
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding-left: 20px;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 15px;
  margin-bottom: 10px;
  margin-top: 30px;
  color: #2f2e41;
`;

export const ServicesP = styled.p`
  font-size: 18px;
  text-align: left;
  margin-bottom: 50px;
`;

export const ServiceTextWrap = styled.div`
  background-color: white;
`;
