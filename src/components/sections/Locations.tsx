import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

interface Location {
  id: number;
  city: string;
  country: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  timeZone: string;
  image: string;
}

interface Times {
  [key: number]: string;
}

interface WorldMapProps {
  activeLocation: number | null;
  setActiveLocation: (id: number | null) => void;
}

const WorldMap: React.FC<WorldMapProps> = ({
  activeLocation,
  setActiveLocation,
}) => {
  return (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-full"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* World Map Base - More Detailed Continents */}
      <path
        d="M200,150 Q300,120 400,150 T600,150 T800,150"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      {/* North America */}
      <path
        d="M100,100 Q200,80 250,120 T350,150"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      {/* Europe */}
      <path
        d="M450,100 Q500,80 550,100 T650,120"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="2"
      />
      {/* Asia */}
      <path
        d="M600,100 Q700,80 750,120 T850,150"
        fill="#f3f4f6"
        stroke="#e5e7eb"
        strokeWidth="2"
      />

      {/* Location Markers with enhanced visibility */}
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Dubai */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setActiveLocation(1)}
          onMouseLeave={() => setActiveLocation(null)}
          className="cursor-pointer"
        >
          <circle
            cx="600"
            cy="220"
            r="10"
            className={`${
              activeLocation === 1 ? "fill-[#5D4A82]" : "fill-[#856BAE]"
            } transition-colors duration-300`}
          />
          <motion.circle
            cx="600"
            cy="220"
            r="15"
            className="fill-[#5D4A82] opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <text
            x="600"
            y="250"
            textAnchor="middle"
            className="fill-[#5D4A82] text-sm font-medium"
          >
            Dubai
          </text>
        </motion.g>

        {/* India */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setActiveLocation(2)}
          onMouseLeave={() => setActiveLocation(null)}
          className="cursor-pointer"
        >
          <circle
            cx="650"
            cy="240"
            r="10"
            className={`${
              activeLocation === 2 ? "fill-[#5D4A82]" : "fill-[#856BAE]"
            } transition-colors duration-300`}
          />
          <motion.circle
            cx="650"
            cy="240"
            r="15"
            className="fill-[#5D4A82] opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <text
            x="650"
            y="270"
            textAnchor="middle"
            className="fill-[#5D4A82] text-sm font-medium"
          >
            India
          </text>
        </motion.g>

        {/* San Antonio */}
        <motion.g
          whileHover={{ scale: 1.2 }}
          onMouseEnter={() => setActiveLocation(4)}
          onMouseLeave={() => setActiveLocation(null)}
          className="cursor-pointer"
        >
          <circle
            cx="250"
            cy="220"
            r="10"
            className={`${
              activeLocation === 4 ? "fill-[#5D4A82]" : "fill-[#856BAE]"
            } transition-colors duration-300`}
          />
          <motion.circle
            cx="250"
            cy="220"
            r="15"
            className="fill-[#5D4A82] opacity-20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <text
            x="250"
            y="250"
            textAnchor="middle"
            className="fill-[#5D4A82] text-sm font-medium"
          >
            San Antonio
          </text>
        </motion.g>
      </motion.g>

      {/* Add subtle grid lines for better visual reference */}
      <g className="opacity-10">
        {[...Array(10)].map((_, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={i * 50}
            x2="1000"
            y2={i * 50}
            stroke="#cbd5e1"
            strokeWidth="1"
          />
        ))}
      </g>
    </svg>
  );
};

const Locations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [times, setTimes] = useState<Times>({});

  const locations = useMemo<Location[]>(
    () => [
      {
        id: 1,
        city: "Dubai",
        country: "United Arab Emirates",
        address: "Dubai Business District",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        timeZone: "Asia/Dubai",
        image: "/images/dubai-office.jpg",
      },
      {
        id: 2,
        city: "Cochin",
        country: "India",
        address: "Info Park, Kakkanad",
        coordinates: { lat: 9.9312, lng: 76.2673 },
        timeZone: "Asia/Kolkata",
        image: "/images/cochin-office.jpg",
      },
      {
        id: 3,
        city: "Trivandrum",
        country: "India",
        address: "Technopark Campus",
        coordinates: { lat: 8.5241, lng: 76.9366 },
        timeZone: "Asia/Kolkata",
        image: "/images/trivandrum-office.jpg",
      },
      {
        id: 4,
        city: "San Antonio",
        country: "United States",
        address: "Texas Business Center",
        coordinates: { lat: 29.4241, lng: -98.4936 },
        timeZone: "America/Chicago",
        image: "/images/sanantonio-office.jpg",
      },
    ],
    []
  );

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Times = {};
      locations.forEach((location) => {
        newTimes[location.id] = new Date().toLocaleTimeString("en-US", {
          timeZone: location.timeZone,
          hour12: true,
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [locations]);

  return (
    <section id="locations" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#5D4A82] mb-4">
            Our Global Presence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located offices serving clients worldwide
          </p>
        </motion.div>

        {/* Map and Locations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl p-4 h-[500px] relative overflow-hidden shadow-lg"
          >
            <WorldMap
              activeLocation={activeLocation}
              setActiveLocation={setActiveLocation}
            />
          </motion.div>

          {/* Locations List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {locations.map((location) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: location.id * 0.1 }}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  transform hover:scale-[1.02] ${
                    activeLocation === location.id
                      ? "bg-gradient-to-r from-[#5D4A82] to-[#856BAE] text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                onMouseEnter={() => setActiveLocation(location.id)}
                onMouseLeave={() => setActiveLocation(null)}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className={`text-xl font-bold ${
                        activeLocation === location.id
                          ? "text-white"
                          : "text-[#5D4A82]"
                      }`}
                    >
                      {location.city}
                    </h3>
                    <p
                      className={`${
                        activeLocation === location.id
                          ? "text-white/90"
                          : "text-gray-600"
                      }`}
                    >
                      {location.country}
                    </p>
                    <p
                      className={`text-sm mt-2 ${
                        activeLocation === location.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {location.address}
                    </p>
                  </div>
                  <div
                    className={`flex items-center space-x-2 ${
                      activeLocation === location.id
                        ? "text-white/80"
                        : "text-gray-500"
                    }`}
                  >
                    <Clock className="w-4 h-4" />
                    <motion.span
                      key={times[location.id]}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="font-mono"
                    >
                      {times[location.id]}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
