import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #6c78b5;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  height: 100%;
  max-width: 1800px;
  z-index: 1;
`;

export const HeroBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  /* width: 100%; */
  height: 100%;
  /* overflow: hidden; */
  /* z-index: 2; */
  object-fit: cover;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* max-width: 1200px; */
  padding: 8px 24px;
  flex-direction: column;
  /* z-index: 2; */
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
