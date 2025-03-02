
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TennesseeHero = () => {
  return (
    <div className="relative h-[500px]">
      <img
        src="/images/toyota.avif"
        alt="Tennessee Auto Insurance"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tennessee Auto Insurance</h1>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white mb-8">
            Affordable auto insurance for drivers throughout Tennessee with same-day coverage and competitive rates.
          </p>
          <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TennesseeHero;
