
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SEOWrapper } from "@/components/seo/SEOWrapper";
import HomeButton from "@/components/shared/HomeButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { glossaryData } from "@/data/glossary";

const Glossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [filteredTerms, setFilteredTerms] = useState(glossaryData);
  const alphabetRef = useRef<HTMLDivElement>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  // Get all available letters in the glossary
  const availableLetters = [...new Set(glossaryData.map(item => item.term[0].toUpperCase()))];
  
  useEffect(() => {
    let result = glossaryData;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        item => 
          item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
          item.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by selected letter
    if (selectedLetter) {
      result = result.filter(
        item => item.term[0].toUpperCase() === selectedLetter
      );
    }
    
    setFilteredTerms(result);
  }, [searchTerm, selectedLetter]);

  const handleLetterClick = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      // Scroll to the alphabet bar to show it's active
      if (alphabetRef.current) {
        alphabetRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedLetter(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOWrapper />
      <Navbar />
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="fixed bottom-6 right-6 z-40">
          <HomeButton />
        </div>
        
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Glossary</h1>
            <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Your comprehensive guide to insurance terminology and definitions.
            </p>
          </motion.div>

          {/* Search and filter section */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search terms or definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              
              <div className="flex items-center gap-2">
                {searchTerm || selectedLetter ? (
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    size="sm"
                  >
                    Clear Filters
                  </Button>
                ) : null}
                
                <Badge variant="outline" className="px-3 py-1">
                  {filteredTerms.length} {filteredTerms.length === 1 ? 'Term' : 'Terms'}
                </Badge>
              </div>
            </div>

            {/* Alphabet filter */}
            <div 
              ref={alphabetRef}
              className="flex flex-wrap gap-1 justify-center mb-8"
            >
              {alphabet.map(letter => (
                <Button
                  key={letter}
                  variant={selectedLetter === letter ? "default" : "outline"}
                  size="sm"
                  className={`min-w-10 ${!availableLetters.includes(letter) ? 'opacity-40 cursor-not-allowed' : ''}`}
                  onClick={() => availableLetters.includes(letter) && handleLetterClick(letter)}
                  disabled={!availableLetters.includes(letter)}
                >
                  {letter}
                </Button>
              ))}
            </div>
          </div>

          {/* Glossary terms */}
          <div className="space-y-6">
            {filteredTerms.length > 0 ? (
              filteredTerms.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="p-6 hover:shadow-md transition-shadow" id={item.term.toLowerCase().replace(/\s+/g, '-')}>
                    <h3 className="text-xl font-semibold text-sky-700 mb-2">{item.term}</h3>
                    <p className="text-gray-700">{item.definition}</p>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-500 mb-2">No terms found</h3>
                <p className="text-gray-400">Try adjusting your search or filters</p>
                <Button 
                  onClick={clearFilters} 
                  variant="outline" 
                  className="mt-4"
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Glossary;
