
import { Image } from "@/components/ui/image";

const TennesseeSidePanel = () => {
  return (
    <div className="space-y-6">
      <Image
        src="/images/camaro-resized.avif"
        alt="Tennessee Auto Insurance Coverage"
        className="rounded-lg shadow-lg w-full h-[300px] object-cover object-center"
      />
      <div className="bg-sky-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Why Choose Us for Tennessee Auto Insurance?</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            Multiple carrier options
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            Competitive Tennessee rates
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            Easy claims process
          </li>
          <li className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-sky-600" />
            Local expertise
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TennesseeSidePanel;
