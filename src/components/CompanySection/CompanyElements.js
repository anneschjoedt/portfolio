import styled from "styled-components";

export const CompanyContainer = styled.div`
  display: grid;
  z-index: 1;
  height: 300px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const CompanyH1 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  padding: 20px;
  color: "#010606";
`;

export const CompanyWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
`;

export const CompanyIcon = styled.img`
  height: 100px;
  max-width: 800px;
  margin-bottom: 10px;
`;
