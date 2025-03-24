
import { Link } from "react-router-dom";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { glossaryData } from "@/data/glossary";

type GlossaryLinkProps = {
  term: string;
  children?: React.ReactNode;
};

const GlossaryLink = ({ term, children }: GlossaryLinkProps) => {
  // Look up the term in the glossary data
  const glossaryItem = glossaryData.find(
    item => item.term.toLowerCase() === term.toLowerCase()
  );
  
  // If term doesn't exist in glossary, just render the children or term
  if (!glossaryItem) {
    return <>{children || term}</>;
  }
  
  // Create a URL-friendly anchor from the term
  const anchor = glossaryItem.term.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link 
            to={`/glossary#${anchor}`} 
            className="text-sky-600 hover:text-sky-800 hover:underline"
          >
            {children || term}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm">
          <p className="text-sm">{glossaryItem.definition}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GlossaryLink;
