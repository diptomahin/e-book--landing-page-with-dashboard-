import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const faqs = [
    {
      q: "How will I receive the eBook after purchase?",
      a: "After successful payment verification, the eBook will be sent to your email within 10-30 minutes. You'll also see a download link on the confirmation page.",
    },
    {
      q: "What format is the eBook in?",
      a: "The eBook is provided in PDF format, compatible with all devices including computers, tablets, and smartphones.",
    },
    {
      q: "How do I make payment through bKash?",
      a: "Send the amount to our bKash merchant number, then fill in the checkout form with your transaction ID. Our team will verify and send your eBook.",
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes! If you're not satisfied within 7 days, we offer a full refund. Just email us with your concern.",
    },
    {
      q: "Can I get support if I have questions?",
      a: "Absolutely! Email us at support@magicscore.com and we'll respond within 24 hours.",
    },
  ];

  return (
    <div>
      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Everything you need to know
          </p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveAccordion(activeAccordion === idx ? null : idx)
                  }
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-800/80 transition"
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`transform transition ${
                      activeAccordion === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeAccordion === idx && (
                  <div className="px-6 pb-6 text-gray-400">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
