import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 450px;
  width: 100%;
  padding: 30px 30px 30px 30px;
  background-color: #F9F9F9;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
 
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const ImgWrap = styled(Link)`
padding-top: 20px;
`;

export const Img = styled.img`
  width: 100%;
  max-height: 250px;

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

export const Header = styled.h1`
  color: #010606;
  font-size: 28px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const Description = styled.p`
  color: #010606;
  font-size: 18px;
  text-align: center;
  padding-top: 10px;
`;

export const Subtext = styled.p`
  color: #606060;
  font-size: 16px;
  text-align: center;
  padding-top: 10px;
`;

