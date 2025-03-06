
import { Button } from "@/components/ui/button";

const TitleBondCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Your Georgia Title Bond?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Purchase your certificate of title bond online now or contact us for expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.open('https://www.mybondapp.com/23196952', '_blank')}
            size="lg"
            className="bg-white text-[#9b87f5] hover:bg-gray-100 hover:text-[#7E69AB]"
          >
            Buy Title Bond Online
          </Button>
          <Button
            onClick={() => {
              document.getElementById('contactSection')?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#9b87f5]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TitleBondCTA;
