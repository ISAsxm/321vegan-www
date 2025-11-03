"use client";
import { useState } from "react";
import { Markup } from "interweave";
import { faqData } from "@/assets/assets";
import Accordion from "@/app/ui/components/Accordion";

const Faqs = () => {
  const [currentOpen, setCurrentOpen] = useState<null | number>(0);
  return (
    <div className="space-y-4">
      {faqData.map(({ title, description }, index) => (
        <Accordion
          key={`faq-${index}`}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          num={index}
          title={title}
        >
          <p className="text-gray-600 leading-relaxed">
            <Markup content={description} />
          </p>
        </Accordion>
      ))}
    </div>
  );
};

export default Faqs;
