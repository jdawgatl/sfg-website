
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Average annual client savings data for visualization
const savingsData = [
  { name: "Auto Insurance", savings: 485 },
  { name: "Home Insurance", savings: 380 },
  { name: "Commercial", savings: 1250 },
  { name: "Surety Bonds", savings: 275 }
];

const SavingsChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-10"
    >
      <Card className="p-6">
        <h3 className="text-xl font-bold text-center mb-6">Average Annual Client Savings</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={savingsData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Dollars Saved ($)', angle: -90, position: 'insideLeft' }} />
              <Tooltip formatter={(value) => [`$${value}`, "Annual Savings"]} />
              <Legend />
              <Bar dataKey="savings" name="Annual Savings" fill="#0284C7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Average dollar savings per year based on client data compared to previous providers
        </p>
      </Card>
    </motion.div>
  );
};

export default SavingsChart;
