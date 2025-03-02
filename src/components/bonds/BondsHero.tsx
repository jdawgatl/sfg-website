
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BondsHero = () => {
  return (
    <section className="relative h-[400px]">
      <img
        src="/images/products-surety-cover.avif"
        alt="Surety Bonds and Title Bonds"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Surety Bonds & Title Bonds
          </h1>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
          <p className="text-white text-lg max-w-2xl mx-auto px-4">
            Fast, affordable surety bonds including title bonds, court bonds, probate bonds and more
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
              <Link to="/quote">Get a Bond Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BondsHero;
