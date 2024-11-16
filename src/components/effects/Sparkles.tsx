import React, { useCallback, useEffect, useState } from "react";

const generateSparkle = (color: string) => {
  const sparkle = {
    id: String(Math.random()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 10 + 10,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      zIndex: 2,
    },
  };
  return sparkle;
};

const Sparkles: React.FC<{
  color?: string;
  count?: number;
  minSize?: number;
  maxSize?: number;
  children?: React.ReactNode;
}> = ({ color = "#FFF", count = 3, minSize = 10, maxSize = 20, children }) => {
  const [sparkles, setSparkles] = useState<Array<any>>([]);

  const createSparkle = useCallback(() => {
    const sparkle = {
      id: String(Math.random()),
      createdAt: Date.now(),
      color,
      size: Math.random() * (maxSize - minSize) + minSize,
      style: {
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        zIndex: 2,
      },
    };
    return sparkle;
  }, [color, maxSize, minSize]);

  useEffect(() => {
    const nextSparkles = [];
    for (let i = 0; i < count; i++) {
      nextSparkles.push(createSparkle());
    }
    setSparkles(nextSparkles);

    const interval = setInterval(() => {
      setSparkles((prevSparkles) => {
        const now = Date.now();
        const nextSparkles = prevSparkles
          .filter((sparkle) => {
            const delta = now - sparkle.createdAt;
            return delta < 1000;
          })
          .concat(createSparkle());
        return nextSparkles;
      });
    }, 350);

    return () => clearInterval(interval);
  }, [count, createSparkle]);

  return (
    <div className="relative inline-block">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute pointer-events-none animate-sparkle"
          style={{
            ...sparkle.style,
            width: sparkle.size,
            height: sparkle.size,
          }}
        >
          <svg
            className="absolute inset-0 animate-spin-slow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
              fill={sparkle.color}
            />
          </svg>
        </div>
      ))}
      <div className="relative z-1">{children}</div>
    </div>
  );
};

export default Sparkles;
