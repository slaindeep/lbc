// src/components/ui/card.tsx
import React from "react";

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="card-content">{children}</div>;

export const CardHeader: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="card-header">{children}</div>;

export const CardTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="card-title">{children}</h2>;
