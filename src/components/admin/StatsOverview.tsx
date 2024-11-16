import { motion } from "framer-motion";
import { PieChart as PieChartIcon, TrendingUp, Users } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatsOverview = () => {
  // Sample data for charts
  const monthlyData = [
    { name: "Jan", appointments: 12 },
    { name: "Feb", appointments: 19 },
    { name: "Mar", appointments: 15 },
    { name: "Apr", appointments: 23 },
    { name: "May", appointments: 28 },
    { name: "Jun", appointments: 25 },
  ];

  const serviceData = [
    { name: "Human Resources", value: 35 },
    { name: "Data Analytics", value: 25 },
    { name: "Audit Services", value: 20 },
    { name: "Legal Consulting", value: 15 },
    { name: "Quality Assurance", value: 5 },
  ];

  const companySizeData = [
    { name: "1-10", value: 20 },
    { name: "11-50", value: 35 },
    { name: "51-200", value: 25 },
    { name: "201-500", value: 15 },
    { name: "500+", value: 5 },
  ];

  const COLORS = ["#5D4A82", "#856BAE", "#9F8AC1", "#B8AAD4", "#D1CBE7"];

  return (
    <div className="p-6">
      {/* Monthly Trend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-6 h-6 text-[#5D4A82]" />
          <h2 className="text-xl font-bold text-[#5D4A82]">Monthly Trend</h2>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="appointments"
                fill="#5D4A82"
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Service Distribution and Company Size */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Service Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <PieChartIcon className="w-6 h-6 text-[#5D4A82]" />
            <h2 className="text-xl font-bold text-[#5D4A82]">
              Service Distribution
            </h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {serviceData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {serviceData.map((service, index) => (
                <div key={service.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Company Size Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-6 h-6 text-[#5D4A82]" />
            <h2 className="text-xl font-bold text-[#5D4A82]">Company Sizes</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={companySizeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {companySizeData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {companySizeData.map((size, index) => (
                <div key={size.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm text-gray-600">
                    {size.name} employees
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsOverview;
