//import { dividerClasses } from "@mui/material";
import {
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title
} from "./HeroComponents";
import { Bio } from "../../my_data/mydata";
import TypeWriter from "../../Type_writer/Typewriter";
import MyImg from '../../static/MyImage/IMG_20240702_135550.jpg'

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                {" "}
                <TypeWriter
                  text={ Bio.roles[0] }
                delay={150}
                  infinite
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer id="Right">
            <Img src={MyImg} alt="image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
