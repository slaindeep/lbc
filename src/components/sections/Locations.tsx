import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Map as LeafletMap } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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
}

interface LocationMapProps {
  activeLocation: number | null;
  setActiveLocation: (id: number | null) => void;
  locations: Location[];
}

interface Times {
  [key: number]: string;
}

// Create custom marker icon
const markerIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: "marker-icon",
});

// Create a new component to handle map operations
const MapController: React.FC<{
  activeLocation: number | null;
  locations: Location[];
}> = ({ activeLocation, locations }) => {
  const map = useMap();

  useEffect(() => {
    if (activeLocation) {
      const location = locations.find((loc) => loc.id === activeLocation);
      if (location) {
        map.setView([location.coordinates.lat, location.coordinates.lng], 5);
      }
    }
  }, [activeLocation, locations, map]);

  return null;
};

// Modify the LocationMap component
const LocationMap: React.FC<LocationMapProps> = ({
  activeLocation,
  setActiveLocation,
  locations,
}) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        className="w-full h-full"
        scrollWheelZoom={false}
      >
        <MapController activeLocation={activeLocation} locations={locations} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.coordinates.lat, location.coordinates.lng]}
            icon={markerIcon}
            eventHandlers={{
              click: () => setActiveLocation(location.id),
              mouseover: () => setActiveLocation(location.id),
              mouseout: () => setActiveLocation(null),
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-[#5D4A82]">{location.city}</h3>
                <p className="text-gray-600">{location.country}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

const WorldLocations: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [times, setTimes] = useState<Times>({});

  const locations: Location[] = useMemo(
    () => [
      {
        id: 1,
        city: "Dubai",
        country: "United Arab Emirates",
        address: "Dubai Business District",
        coordinates: { lat: 25.2048, lng: 55.2708 },
        timeZone: "Asia/Dubai",
      },
      {
        id: 2,
        city: "Cochin",
        country: "India",
        address: "Info Park, Kakkanad",
        coordinates: { lat: 9.9312, lng: 76.2673 },
        timeZone: "Asia/Kolkata",
      },
      {
        id: 3,
        city: "Trivandrum",
        country: "India",
        address: "Technopark Campus",
        coordinates: { lat: 8.5241, lng: 76.9366 },
        timeZone: "Asia/Kolkata",
      },
      {
        id: 4,
        city: "San Antonio",
        country: "United States",
        address: "Texas Business Center",
        coordinates: { lat: 29.4241, lng: -98.4936 },
        timeZone: "America/Chicago",
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
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, [locations]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#5D4A82] mb-4">
            Our Global Presence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strategically located offices serving clients worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-4 h-[500px] shadow-lg">
            <LocationMap
              activeLocation={activeLocation}
              setActiveLocation={setActiveLocation}
              locations={locations}
            />
          </div>

          <div className="space-y-4">
            {locations.map((location) => (
              <div
                key={location.id}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer
                  ${
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
                      className={
                        activeLocation === location.id
                          ? "text-white/90"
                          : "text-gray-600"
                      }
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
                  <div className="flex items-center space-x-2">
                    <span
                      className={`font-mono ${
                        activeLocation === location.id
                          ? "text-white/80"
                          : "text-gray-500"
                      }`}
                    >
                      {times[location.id]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldLocations;