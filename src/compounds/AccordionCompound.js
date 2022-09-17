import React from "react";
import AccordionBody from "../components/Accordion/AccordionBody";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import FAQData from "../data/faqs.json";

function AccordionCompound() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {FAQData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default AccordionCompound;
