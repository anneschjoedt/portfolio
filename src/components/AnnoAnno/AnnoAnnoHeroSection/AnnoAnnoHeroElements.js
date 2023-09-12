import styled from "styled-components";
import image from "../../../images/annoanno/logo-annoanno.svg";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  width: 100%;
  z-index: -1;
  background: fixed;
  background-position: center;

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-direction: column;
  z-index: -1;
  position: fixed;
`;

export const HeroH1 = styled.h1`
  color: #010606;
  font-size: 208px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #010606;
  font-size: 18px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 400px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    height: 100px;
    width: 0;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Logo = styled.div`
  /* background-image: url(${image}); */
  height: 100px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ImgWrap = styled.div`
  max-width: 855px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0;
  height: 200px;
`;
