import styled from "styled-components";

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
  height: 250px;
  width: 100%;
  /* max-width: 1100px; */
  margin-left: auto;
  margin-right: auto;
  padding: 278px 0;
  justify-content: center;
  background: #ffffff;
`;

export const CompanyH1 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  padding: 10px;
  color: "#010606";
`;

export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const CompanyIcon = styled.img`
  height: 40px;
  margin: 10px;
`;

export const IconDiv = styled.img`
  height: 50px;
  margin: 0;
  margin-top: 10px;
  padding: 0;
`;
