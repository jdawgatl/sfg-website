
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const ServiceAreas = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mb-8"
    >
      <Card className="p-6">
        <Collapsible className="w-full">
          <div className="flex items-center justify-between space-x-4 px-2">
            <h3 className="text-xl font-bold">Our Service Areas</h3>
            <CollapsibleTrigger className="hover:bg-gray-100 p-2 rounded-full">
              <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="mt-4 space-y-4">
            <div>
              <h4 className="font-medium mb-2">Georgia Counties</h4>
              <p className="text-sm text-gray-600">
                Proudly serving all 159 counties across Georgia including: Fulton, DeKalb, Gwinnett, Cobb, Clayton, 
                Fayette, Coweta, Henry, Rockdale, Douglas, Cherokee, Forsyth, Paulding, Bartow, Newton, Walton, 
                Spalding, Carroll, Hall, Barrow, Columbia, Richmond, Muscogee, Bibb, Houston, Chatham, Lowndes, 
                Glynn, Whitfield, Floyd, Clarke, Dougherty, Bulloch, Troup, Liberty, Walker, Catoosa, Effingham, 
                Camden, Baldwin, Gordon, Habersham, Coffee, Tift, Laurens, Ware, Jackson, and all others.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Georgia Cities</h4>
              <p className="text-sm text-gray-600">
                Cities include: Atlanta, Fayetteville, Peachtree City, Newnan, McDonough, Jonesboro, Marietta, 
                Alpharetta, Roswell, Sandy Springs, Decatur, Dunwoody, Brookhaven, Smyrna, Kennesaw, Acworth, 
                Douglasville, Stockbridge, Griffin, Macon, Columbus, Augusta, Savannah, Athens, Valdosta, Albany, 
                Rome, Brunswick, Gainesville, Lawrenceville, Norcross, Duluth, Conyers, Covington, Cartersville, 
                Dalton, LaGrange, Statesboro, Warner Robins, Hinesville, and throughout the state.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Tennessee &amp; Mississippi</h4>
              <p className="text-sm text-gray-600">
                We're also licensed to serve clients throughout Tennessee and Mississippi. Our Tennessee coverage includes
                major areas like Nashville, Memphis, Knoxville, Chattanooga, and surrounding communities. In Mississippi,
                we provide service to Jackson, Gulfport, Biloxi, Hattiesburg, and more. Contact us for details about 
                available coverage options in your specific area.
              </p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    </motion.div>
  );
};

export default ServiceAreas;
