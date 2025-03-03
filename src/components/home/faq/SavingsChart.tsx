
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Average annual client savings data with simplified labels
const savingsData = [
  { name: "Auto", savings: 485, fill: "#4F46E5" },
  { name: "Home", savings: 380, fill: "#0EA5E9" },
  { name: "Commercial", savings: 1250, fill: "#059669" },
  { name: "Bonds", savings: 275, fill: "#8B5CF6" }
];

const SavingsChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="p-6 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-bold text-center mb-6">Annual Client Savings</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={savingsData}
              margin={{
                top: 20,
                right: 20,
                left: 5,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis 
                label={{ 
                  value: 'Savings ($)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { textAnchor: 'middle', fontSize: 12 }
                }} 
              />
              <Tooltip 
                formatter={(value) => [`$${value}`, "Annual Savings"]}
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #e2e8f0'
                }}
              />
              <Legend />
              <Bar 
                dataKey="savings" 
                name="Annual Savings" 
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4 italic">
          Average savings compared to previous providers
        </p>
      </Card>
    </motion.div>
  );
};

export default SavingsChart;
