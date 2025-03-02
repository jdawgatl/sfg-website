
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "What exactly is a certificate of title bond?",
      answer: "A certificate of title bond (also called a lost title bond) is a surety bond required by the Georgia Department of Revenue when you need to obtain a bonded title for a vehicle. This typically happens when you don't have proper ownership documentation, such as when you've lost your title or purchased a vehicle without receiving the title."
    },
    {
      question: "How much does a title bond cost in Georgia?",
      answer: "The cost of a title bond in Georgia typically starts around $100 for most vehicles, but varies based on the value of your vehicle. The bond amount is usually set at 1.5 times the vehicle's value, but you only pay a percentage of this amount (the premium) to purchase the bond."
    },
    {
      question: "How long does it take to get a title bond?",
      answer: "With our streamlined process, most title bonds can be issued the same day you apply. Once you have your bond, you'll take it to your local Georgia DMV office to apply for a bonded title."
    },
    {
      question: "Do I need a credit check to get a title bond?",
      answer: "Most title bonds do not require credit checks or extensive financial information, making them accessible to nearly everyone who needs one."
    },
    {
      question: "How long is a title bond valid in Georgia?",
      answer: "A Georgia certificate of title bond remains in effect for 3 years. After this period, if no one has come forward to claim ownership of the vehicle, the \"bonded\" status is removed from your title."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-[#9b87f5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about certificate of title bonds in Georgia
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
