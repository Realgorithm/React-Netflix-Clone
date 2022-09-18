import React from "react";
import JumboImage from "../components/Jumbotron/JumboImage";
import JumboImageWrapper from "../components/Jumbotron/JumboImageWrapper";
import JumboItem from "../components/Jumbotron/JumboItem";
import JumboSubTitle from "../components/Jumbotron/JumboSubTitle";
import JumboTitle from "../components/Jumbotron/JumboTitle";
import JumboWrapper from "../components/Jumbotron/JumboWrapper";
import JumboTextWrapper from "../components/Jumbotron/JumpoTextWrapper";
import JumboData from "../data/jumbo.json";
import Seperator from "../components/Seperator/Seperator";

function JumboCompound() {
  return (
    <JumboWrapper>
      {JumboData.map(item => (
        <>
          <JumboItem key={item.id}>
            <JumboTextWrapper>
              <JumboTitle>{item.title}</JumboTitle>
              <JumboSubTitle>{item.subTitle}</JumboSubTitle>
            </JumboTextWrapper>
            <JumboImageWrapper>
              <JumboImage src={item.image} alt={item.alt} />
            </JumboImageWrapper>
          </JumboItem>
          <Seperator />
        </>
      ))}
    </JumboWrapper>
  );
}

export default JumboCompound;
