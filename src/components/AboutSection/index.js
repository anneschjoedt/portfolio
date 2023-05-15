import React from "react";
import img from "../../images/hero-img.png";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Text,
  Wrapper,
  CVLink,
  GreyText,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <CVLink
                    href="https://www.canva.com/design/DAFhAx_xiaY/view"
                    target="_blank"
                    arial-label="CV"
                  >
                    View my CV
                  </CVLink>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Wrapper>
                  <Text>2019 - Present</Text>
                  <Text>Digital Designer</Text>
                  <Text>Freelance</Text>
                </Wrapper>
                <Wrapper>
                  <Text>2023 - Present</Text>
                  <Text>UX/UI designer</Text>
                  <Text>Jobspire</Text>
                </Wrapper>
                <Wrapper id="grey">
                  <GreyText>2022 - 2023</GreyText>
                  <GreyText>UX/UI designer</GreyText>
                  <GreyText>Blixt & Dunder</GreyText>
                </Wrapper>
                <Wrapper id="grey">
                  <GreyText>2023</GreyText>
                  <GreyText>UX designer</GreyText>
                  <GreyText>AnnóAnno</GreyText>
                </Wrapper>
                <Wrapper>
                  <GreyText>2021-2022</GreyText>
                  <GreyText>Web developer</GreyText>
                  <GreyText>O Days</GreyText>
                </Wrapper>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
