import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  width: 100%;
  z-index: -1;
  background: fixed;
  background-position: center;

  @media screen and (max-width: 480px) {
    height: 600px;
  }
`;

// export const HeroBg = styled.div`
//   height: 800px;
//   display: flex;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   height: auto;

//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// `;

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  padding: 8px 24px;
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

export const CVLink = styled.a`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#fff" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#9B3235" : "#2F2E41")};
    color: #fff;
  }
`;
