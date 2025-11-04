import { faqData } from "@/assets/assets";
import Faq from "./Faq";

const Faqs = () => {
  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <Faq faq={faq} key={`faq-${index}`} />
      ))}
    </div>
  );
};

export default Faqs;
